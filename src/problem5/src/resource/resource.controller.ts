// resource.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateDto } from '@src/resource/dtos/create.dto';
import { ResourceFilterDto } from '@src/resource/dtos/filter.dto';
import { UpdateDto } from '@src/resource/dtos/update.dto';
import { ResourceService } from '@src/resource/resource.service';

@Controller('resources')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.resourceService.create(createDto);
  }

  @Get()
  findAll(@Query() resourceFilterDto: ResourceFilterDto) {
    return this.resourceService.findAll(
      resourceFilterDto,
      resourceFilterDto.offset,
      resourceFilterDto.limit,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourceService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() update: UpdateDto) {
    return this.resourceService.update(id, update);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourceService.remove(id);
  }
}
