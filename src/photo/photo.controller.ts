import { PhotoEntity } from './photo.entity';
import { Controller, Get, Body, Post, Param, Put, Delete } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoDto } from './photo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Photo')
@Controller('photo')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) { }

    @Get()
    findAll(): Promise<PhotoEntity[]> {
        return this.photoService.findAll();
    }

    @Post('create')
    create(@Body() PhotoDto: PhotoDto) {
        return this.photoService.create(PhotoDto)
    }

    @Delete('delete/:id')
    delete(@Param('id') id: number) {
        return this.photoService.delete(id)
    }

    @Put('update/:id')
    update(@Param('id') id: number, @Body() PhotoDto: PhotoDto) {
        return this.photoService.update(PhotoDto)
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<PhotoEntity> {
        return this.photoService.findOne(id)
    }
}