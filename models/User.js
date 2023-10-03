import { Schema, model, models } from 'mongoose'
// models -> all models created by developer

const UserSchema = new Schema({
	name: {
		type: String,
		required: false,
		minLength: [3, 'Fullname must be at least 3 characters'],
		maxLength: [50, 'Fullname must be at most 50 characters'],
	},
	email: {
		type: String,
		unique: [true, 'Email must be unique'],
		required: [true, 'Email is required'],
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, // regular expression to match
			'Email is not valid', // message
		],
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
		select: false, // find() won't return password to front-end
	},

	title: {
		type: String,
		required: false,
		minLength: [3, 'Fullname must be at least 3 characters'],
		maxLength: [50, 'Fullname must be at most 50 characters'],
	},
	gov_org_firm: {
		type: String,
		required: false,
		minLength: [3, 'Fullname must be at least 3 characters'],
		maxLength: [50, 'Fullname must be at most 50 characters'],
	},
	image: {
		type: String,
		required: false,
		default: null,
	},

	emailVerified: {
		type: Boolean,
		required: false,
		default: null,
	},
})

// prevent model User repetitively
export const User = models.User || model('User', UserSchema)
