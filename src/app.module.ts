import { AuthController } from './auth/auth.controller';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UserService } from 'src/user/user.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PhotoModule } from './photo/photo.module';
import { UserEntity } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PhotoModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule { }
