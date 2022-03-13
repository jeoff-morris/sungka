import { Connection } from 'mongoose';
import { UserSchema } from './schemas/user.schema';
import { databaseConnection, userModel } from '../constants';

export const usersProviders = [
	{
		provide: userModel,
		useFactory: (connection: Connection) => connection.model('User', UserSchema),
		inject: [databaseConnection]
	}
];
