import { TPublicationStatus, TPublicationType } from '../publication.model';

export class PublicationUpdateDTO {
  descritpion?: string;
  pictures?: string[];
  publicationType?: TPublicationType;
  endTimeStamp?: string;
  siteUrl?: string;
  status?: TPublicationStatus;
}
