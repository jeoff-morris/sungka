import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { userModel } from '../constants';
import { IUser } from './interfaces/users.interface';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
	constructor(
		@Inject(userModel)
		private userModel: Model<IUser>
	) {}

	async findByEmail(email: string): Promise<IUser | undefined> {
		return this.userModel.findOne({ email: email });
	}

	async findById(id: string): Promise<IUser | undefined> {
		return this.userModel.findById({ id: id });
	}

	async create(createUserDto: CreateUserDto): Promise<IUser> {
		const createdUser = new this.userModel(createUserDto);
		return createdUser.save();
	}

	async findAll(): Promise<IUser[]> {
		return this.userModel.find().exec();
	}
}
