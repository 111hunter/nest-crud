import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserModule } from '../user/user.module'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './local.strategy'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy'
import { JWT_SECRET } from 'config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: JWT_SECRET,
            signOptions: { expiresIn: '3600s' },
        }),
        UserModule,
        TypeOrmModule.forFeature([UserEntity])
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [PassportModule, AuthService],
})
export class AuthModule { }
