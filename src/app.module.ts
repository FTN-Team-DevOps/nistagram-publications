import { Module } from '@nestjs/common';
import { PublicationModule } from './publication/publication.module';

@Module({
  imports: [PublicationModule],
})
export class AppModule {}
