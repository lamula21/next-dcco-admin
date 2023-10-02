import { Schema, model, models } from 'mongoose'

const SubscribedUserSchema = new Schema(
	{
		email: { type: String, unique: true  },
	},
	{
		timestamps: true,
	}
)

export const SubscribedUser = models?.SubscribedUser || model('SubscribedUser', SubscribedUserSchema)