import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';

@Schema()
export class ResourceEntity {
  @Prop({ type: String, default: randomUUID, unique: true, index: true })
  id: string;

  @Prop({ required: true, index: true, text: true })
  name: string;

  @Prop({ default: '' })
  description: string;
}

export const ResourceSchema = SchemaFactory.createForClass(ResourceEntity);
