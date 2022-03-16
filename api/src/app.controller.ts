import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UsersService } from './users/users.service';
import { Controller, Request, Post, Get, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { IUser } from './users/interfaces/users.interface';

@Controller()
export class AppController {
	constructor(private authService: AuthService, private userService: UsersService) {}

	@Post('auth/login')
	async login(@Request() req: any) {
		const user = await this.authService.validateUser(req.body.email, req.body.password);
		const jwt = await this.authService.login(user);
		req.session.jwt = jwt;
	}

	@UseGuards(JwtAuthGuard)
	@Get('profile')
	getProfile(@Request() req: any) {
		return req.user;
	}

	@Post('auth/register')
	async register(@Body() createUser: IUser) {
		const user = await this.userService.create(createUser);
		return user;
	}
}
