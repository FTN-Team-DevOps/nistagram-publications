import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PublicationCreateDTO } from './dto/publication-create.dto';
import { PublicationSearchDTO } from './dto/publication-search.dto';
import { PublicationUpdateDTO } from './dto/publication-update.dto';
import { Publication, TPublicationStatus } from './publication.model';
import { PublicationService } from './publication.service';

@Controller('/')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @MessagePattern('publications-get')
  async search(
    @Payload() payload: PublicationSearchDTO,
  ): Promise<Publication[]> {
    Logger.log(`THis is payload ${JSON.stringify(payload)}`);
    return await this.publicationService.findAll(payload);
  }

  @MessagePattern('publications-create')
  async create(@Payload() payload: PublicationCreateDTO): Promise<Publication> {
    Logger.log(`THis is payload ${JSON.stringify(payload)}`);
    return await this.publicationService.create(payload);
  }

  @MessagePattern('publications-update')
  async update(
    @Payload() payload: { id: string; data: PublicationUpdateDTO },
  ): Promise<Publication> {
    return await this.publicationService.update(payload.id, payload.data);
  }

  @MessagePattern('publications-delete')
  async delete(@Payload() payload: string): Promise<Publication> {
    return await this.publicationService.update(payload, {
      status: 'deleted ' as TPublicationStatus,
    });
  }
}
