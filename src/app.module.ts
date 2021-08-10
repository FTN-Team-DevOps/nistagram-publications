import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PublicationModule } from './publication/publication.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI), PublicationModule],
})
export class AppModule {}
