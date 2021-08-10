import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { PublicationController } from './publication.controller';
import { Publication, PublicationSchema } from './publication.model';
import { PublicationService } from './publication.service';

describe('PublicationController', () => {
  let controller: PublicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([
          { name: Publication.name, schema: PublicationSchema },
        ]),
      ],
      controllers: [PublicationController],
      providers: [PublicationService],
    }).compile();

    controller = module.get<PublicationController>(PublicationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
