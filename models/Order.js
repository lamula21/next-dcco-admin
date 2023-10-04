import { Schema, model, models } from 'mongoose'

const OrderSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: `User`,
			required: true,
		},
		items: [{ type: Object }],

		name: String,
		email: String,
		streetAddress: String,
		postalCode: String,
		city: String,
		state: String,
		phone: String,
		country: String,
		zipCode: String,
		phone: String,

		isPaid: Boolean,
	},
	{
		timestamps: true,
	}
)

// Fixed issue with model already created
export const Order = models?.Order || model('Order', OrderSchema)
