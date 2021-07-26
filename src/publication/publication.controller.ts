import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PublicationService } from './publication.service';

@Controller('/')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @MessagePattern('publications-get')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async myController(@Payload() data: any): Promise<string> {
    return await this.publicationService.test();
  }
}
