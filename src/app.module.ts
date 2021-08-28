import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { PublicationModule } from './publication/publication.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    PrometheusModule.register(),
    PublicationModule,
  ],
})
export class AppModule {}
