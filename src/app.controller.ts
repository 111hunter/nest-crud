import { Body, Controller, Get, Post, Query, Request, UseGuards, Res } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiTags } from '@nestjs/swagger'
import { AuthService } from 'src/auth/auth.service'

@ApiTags('Auth')
@Controller('auth')
export class AppController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    @UseGuards(AuthGuard('jwt'))
    @Get('users')
    async findAll(): Promise<any[]> {
        return await this.authService.findAll();
    }

    @Post('register')
    async register(@Body() req, @Res() res) {
        const result = await this.authService.register(req);
        res.status(result.statusCode).send(result);
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body() req, @Res() res) {
        const result = await this.authService.login(req);
        res.status(result.statusCode).send(result);
    }
}
