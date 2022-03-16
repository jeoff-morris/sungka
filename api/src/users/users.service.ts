import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, Inject } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { userModel } from '../constants';
import { IUser } from './interfaces/users.interface';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UsersService {
	constructor(
		@Inject(userModel)
		private userModel: Model<IUser>
	) {}

	async findByEmail(email: string): Promise<IUser | null> {
		return this.userModel.findOne({ email: email });
	}

	async findById(id: string): Promise<IUser | null> {
		return this.userModel.findById({ id: id });
	}

	async create(createUserDto: CreateUserDto): Promise<UserDto> {
		const { email } = createUserDto;
		const user = await this.findByEmail(email);
		if (user) {
			throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
		}
		const createdUser = new this.userModel(createUserDto);
		await createdUser.save();
		return this.sanitizeUser(createdUser);
	}

	async findAll(): Promise<IUser[]> {
		return this.userModel.find().exec();
	}

	sanitizeUser(user: IUser): UserDto {
		const { email, dateOfBirth, firstName, lastName, username } = user;
		const sanitized: UserDto = { email, dateOfBirth, firstName, lastName, username };
		return sanitized;
	}
}
