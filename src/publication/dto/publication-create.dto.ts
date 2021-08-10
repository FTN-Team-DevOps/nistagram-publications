import { TPublicationType } from '../publication.model';

export class PublicationCreateDTO {
  descritpion: string;
  pictures: string[];
  publicationType: TPublicationType;
  user: string;
  endTimeStamp?: string;
  siteUrl?: string;
}
