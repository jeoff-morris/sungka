import { Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import { UsersController } from './users.controller';
import { UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { databaseConnection, userModel } from '../constants';
import { DatabaseModule } from '../database/database.module';

@Module({
	imports: [DatabaseModule],
	controllers: [UsersController],
	providers: [UsersService, ...usersProviders],
	exports: [UsersService]
})
export class UsersModule {
	public usersProviders = [
		{
			provide: userModel,
			useFactory: (connection: Connection) => connection.model('User', UserSchema),
			inject: [databaseConnection]
		}
	];
}
