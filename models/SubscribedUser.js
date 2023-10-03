import { Schema, model, models } from 'mongoose'

const SubscribedUserSchema = new Schema(
	{
		fullname: { type: String, required: true },
		email: { type: String, unique: true, required: true },
	},
	{
		timestamps: true,
	}
)

export const SubscribedUser =
	models?.SubscribedUser || model('SubscribedUser', SubscribedUserSchema)
