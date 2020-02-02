import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoEntity } from './photo/photo.entity';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [PhotoEntity],
      synchronize: true,
    }),
    PhotoModule,
  ],
})
export class AppModule { }
