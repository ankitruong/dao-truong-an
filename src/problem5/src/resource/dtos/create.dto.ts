import { ApiProperty, PickType } from '@nestjs/swagger';
import { ResourceEntity } from '@src/resource/resource.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDto extends PickType(ResourceEntity, [
  'name',
  'description',
]) {
  @ApiProperty({ default: 'default name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ default: 'description' })
  @IsString()
  description: string;
}
