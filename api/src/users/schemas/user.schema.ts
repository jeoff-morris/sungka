import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../dtos/create-user.dto';

export const UserSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	dateOfBirth: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	username: { type: String, unique: true, required: true }
});

UserSchema.pre('save', async function (next) {
	const user = this as CreateUserDto;

	if (!this.isModified('password')) {
		return next();
	}

	try {
		const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
		user.password = await bcrypt.hash(user.password, salt);
		return next();
	} catch (err) {
		return next(err);
	}
});

UserSchema.methods.validatePassword = async function (password: string) {
	return bcrypt.compare(password, this.password);
};
