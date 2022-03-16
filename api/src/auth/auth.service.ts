import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
	constructor(private usersService: UsersService, private jwtService: JwtService) {}

	async validateUser(email: string, pass: string): Promise<any> {
		const user = await this.usersService.findByEmail(email);
		if (user && this.comparePassword(pass, user.password)) {
			const { password, ...result } = user;
			return result;
		}
		return null;
	}

	async login(user: any) {
		const payload = { email: user.email, sub: user.userId };
		return {
			access_token: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET_KEY })
		};
	}

	async comparePassword(password: string, hash: string) {
		try {
			return await bcrypt.compare(password, hash);
		} catch (error) {
			console.log(error);
		}
		return false;
	}
}
