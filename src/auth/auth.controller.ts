import { UserDto } from './../user/user.dto';
import { Body, Controller, Get, Post, Query, Request, UseGuards, Res } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiTags, ApiHeader, ApiBearerAuth } from '@nestjs/swagger'
import { AuthService } from 'src/auth/auth.service'

// @ApiHeader({
//     name: 'Authorization',
//     description: 'Auth token'
// })
@ApiBearerAuth()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    @UseGuards(AuthGuard('jwt'))
    @Get('users')
    async findAll(): Promise<any[]> {
        return await this.authService.findAll();
    }

    @Post('signUp')
    async register(@Body() req: UserDto, @Res() res) {
        const result = await this.authService.register(req);
        res.status(result.statusCode).send(result);
    }

    @UseGuards(AuthGuard('local'))
    @Post('signIn')
    async login(@Body() req: UserDto, @Res() res) {
        const result = await this.authService.login(req);
        res.status(result.statusCode).send(result);
    }
}
