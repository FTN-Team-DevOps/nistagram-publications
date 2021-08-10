import { TPublicationType } from '../publication.model';

export class PublicationSearchDTO {
  _id?: string;
  user?: string;
  publicationType?: TPublicationType;
  relevatnUsers?: string[];
}
