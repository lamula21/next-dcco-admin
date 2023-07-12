import { Schema, model, models } from 'mongoose'

const ProductSchema = new Schema(
	{
		title: { type: String, require: true },
		description: { type: String },
		imageUrl: [{ type: String }],
		category: { type: String, required: true },
		price: { type: Number, required: true },
		size: { type: String, required: true },
		color: { type: String, required: true },
	},
	{
		timestamps: true,
	}
)

// Fixed issue with model already created
export const Product = models?.Product || model('Product', ProductSchema)
