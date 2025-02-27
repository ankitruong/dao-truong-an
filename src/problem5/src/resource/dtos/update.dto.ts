import { ApiProperty, PickType } from '@nestjs/swagger';
import { CreateDto } from '@src/resource/dtos/create.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDto extends PickType(CreateDto, ['description']) {
  @ApiProperty({ default: 'new description' })
  @IsNotEmpty()
  @IsString()
  description: string;
}
