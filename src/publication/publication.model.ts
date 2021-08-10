import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TPublicationType = 'post' | 'story';
export type TPublicationStatus = 'active' | 'deleted';

export type PublicationDocument = Publication & Document;

@Schema()
export class Publication {
  @Prop()
  user: string;
  @Prop()
  descritpion: string;
  @Prop()
  pictures: string[];
  @Prop()
  publicationType: TPublicationType;
  @Prop()
  publishedTimeStamp: string;
  @Prop()
  lastChangedTimeStamp: string;
  @Prop()
  endTimeStamp: string | undefined;
  @Prop()
  siteUrl: string | null;
  @Prop()
  status: TPublicationStatus;
}

export const PublicationSchema = SchemaFactory.createForClass(Publication);
