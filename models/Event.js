import { Schema, model, models } from 'mongoose'

const EventSchema = new Schema(
	{
		title: { type: String, require: true },
		description: { type: String },
		date: { type: String, require: true },
		init_time: { type: String, require: true },
		end_time: { type: String, require: true },
		imageUrl: [{ type: String }],
		address: { type: String },
		url: { type: String },
<<<<<<< HEAD
		subtitle: { type: String }
=======
		subtitle: { type: String },
>>>>>>> ede9701c87bfbf6b2d4430059c1abe0d45dc14a0
	},
	{
		timestamps: true,
	}
)

// Fixed issue with model already created
export const Event = models?.Event || model('Event', EventSchema)
