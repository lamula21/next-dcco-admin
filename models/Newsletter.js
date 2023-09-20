import { Schema, model, models } from 'mongoose'

const NewsletterSchema = new Schema(
	{
		title: { type: String, require: true },
		content: { type: Object, require: true },
		url: { type: String, require: true },
		author: { type: String, require: true },
		authorDetail: { type: String, require: true },
		sendDate: { type: String },
	},
	{
		timestamps: true,
	}
)

// Fixed issue with model already created
export const Newsletter =
	models?.Newsletter || model('Newsletter', NewsletterSchema)
