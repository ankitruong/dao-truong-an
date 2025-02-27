import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResourceController } from '@src/resource/resource.controller';
import { ResourceEntity, ResourceSchema } from '@src/resource/resource.entity';
import { ResourceService } from '@src/resource/resource.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/challenge'),
    MongooseModule.forFeature([
      { name: ResourceEntity.name, schema: ResourceSchema },
    ]),
  ],
  controllers: [ResourceController],
  providers: [ResourceService],
})
export class AppModule {}
