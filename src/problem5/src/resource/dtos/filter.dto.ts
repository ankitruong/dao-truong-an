import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

// should move to common
export class BaseFilterDto {
  @ApiProperty({ default: 0 })
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  offset: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @ApiProperty({ default: 10 })
  limit: number;
}

export class ResourceFilterDto extends BaseFilterDto {
  @ApiProperty({ type: String, format: 'uuid' })
  @IsOptional()
  id: string;

  @ApiProperty({ default: 'default name' })
  @IsString()
  @IsOptional()
  name: string;
}
