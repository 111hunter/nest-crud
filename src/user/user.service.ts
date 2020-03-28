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
        // const user = Object.assign(new UserEntity(), userDto)
        const user = this.userRepository.create(userDto);
        return await this.userRepository.save(user);
    }

    async findUsername(username: string) {
        return this.userRepository.findOne({ where: { username } })
    }

    async findAll(): Promise<any[]> {
        return await this.userRepository.find();
    }
}
