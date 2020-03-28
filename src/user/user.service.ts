import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './user.entity'
import { Repository } from 'typeorm'
import { UserDto } from './user.dto'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    async createUser(userDto: UserDto) {
        const entity = Object.assign(new UserEntity(), userDto)
        return await this.userRepository.save(entity);
    }

    async findUsername(username: string) {
        return this.userRepository.findOne({ where: { username } })
    }

    async findAll(): Promise<any[]> {
        return await this.userRepository.find();
    }
}
