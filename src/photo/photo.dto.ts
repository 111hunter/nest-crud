import { IsInt, IsString, IsBoolean } from 'class-validator'
import { ApiProperty, ApiBody } from '@nestjs/swagger';

export class PhotoDto {

    @ApiProperty()
    @IsInt()
    readonly id: number;

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly description: string;

    @ApiProperty()
    @IsString()
    readonly filename: string;

    @ApiProperty()
    @IsInt()
    readonly views: number;

    @ApiProperty()
    @IsBoolean()
    readonly isPublished: boolean;
}