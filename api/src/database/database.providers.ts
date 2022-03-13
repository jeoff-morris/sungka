import * as mongoose from 'mongoose';
import { databaseConnection } from '../constants';

export const databaseProviders = [
	{
		provide: databaseConnection,
		useFactory: (): Promise<typeof mongoose> => mongoose.connect(process.env.MONGODB_URI)
	}
];
