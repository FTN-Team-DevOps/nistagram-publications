import { TPublicationType } from '../publication.model';

export class PublicationCreateDTO {
  description: string;
  pictures: string[];
  publicationType: TPublicationType;
  user: string;
  endTimeStamp?: string;
  siteUrl?: string;
}
