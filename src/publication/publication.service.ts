import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PublicationCreateDTO } from './dto/publication-create.dto';
import { PublicationSearchDTO } from './dto/publication-search.dto';
import { PublicationUpdateDTO } from './dto/publication-update.dto';
import { Publication, PublicationDocument } from './publication.model';

@Injectable()
export class PublicationService {
  constructor(
    @InjectModel(Publication.name)
    private readonly publicationModel: Model<PublicationDocument>,
  ) {}

  async findAll(params: PublicationSearchDTO): Promise<Publication[]> {
    return this.publicationModel.find(params).exec();
  }

  async create(publicationDTO: PublicationCreateDTO): Promise<Publication> {
    return this.publicationModel.create(publicationDTO);
  }

  async update(
    _id: string,
    publicationData: PublicationUpdateDTO,
  ): Promise<Publication> {
    return this.publicationModel.findOneAndUpdate(
      { _id },
      { $set: { ...publicationData } },
      { new: true },
    );
  }
}
