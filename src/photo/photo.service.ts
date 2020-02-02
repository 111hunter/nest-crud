import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhotoEntity } from './photo.entity';
import { PhotoDto } from './photo.dto';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(PhotoEntity)
    private readonly photoRepository: Repository<PhotoEntity>,
  ) { }

  async findAll(): Promise<PhotoEntity[]> {
    return this.photoRepository.find();
  }

  async create(photoDto: PhotoDto) {
    await this.photoRepository.save(photoDto)
  }

  async delete(id: number) {
    await this.photoRepository.delete(id)
  }

  async update(photoDto: PhotoDto) {
    await this.photoRepository.update(photoDto.id, photoDto)
  }

  async findOne(id: number): Promise<PhotoEntity> {
    return await this.photoRepository.findOne(id)
  }
}