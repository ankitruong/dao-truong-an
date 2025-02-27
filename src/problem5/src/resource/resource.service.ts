// resource.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDto } from '@src/resource/dtos/create.dto';
import { UpdateDto } from '@src/resource/dtos/update.dto';
import { ResourceEntity } from '@src/resource/resource.entity';
import { Model } from 'mongoose';

@Injectable()
export class ResourceService {
  constructor(
    @InjectModel('Resource')
    private readonly resourceModel: Model<ResourceEntity>,
  ) {}

  async create(dto: CreateDto): Promise<ResourceEntity> {
    const createdResource = new this.resourceModel(dto);
    return createdResource.save();
  }

  async findAll(
    filter: Partial<ResourceEntity>,
    offset: number,
    limit: number,
  ): Promise<ResourceEntity[]> {
    const conditions = {};
    if (filter.name) {
      conditions['name'] = { $regex: new RegExp(filter.name, 'i') };
    }

    if (filter.id) {
      conditions['id'] = filter.id;
    }
    return this.resourceModel
      .find(conditions)
      .skip(offset * limit)
      .limit(limit)
      .exec();
  }

  async findOne(id: string): Promise<ResourceEntity | null> {
    return this.resourceModel.findOne({ id }).exec();
  }

  async update(id: string, update: UpdateDto): Promise<ResourceEntity | null> {
    return this.resourceModel
      .findOneAndUpdate({ id }, update, { new: true })
      .exec();
  }

  async remove(id: string): Promise<ResourceEntity | null> {
    return this.resourceModel.findOneAndRemove({ id }).exec();
  }
}
