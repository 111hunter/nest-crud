import { IsInt, IsString, IsBoolean } from 'class-validator'

export class PhotoDto {

    @IsInt()
    readonly id: number;

    @IsString()
    readonly name: string;

    @IsString()
    readonly description: string;

    @IsString()
    readonly filename: string;

    @IsInt()
    readonly views: number;

    @IsBoolean()
    readonly isPublished: boolean;
}