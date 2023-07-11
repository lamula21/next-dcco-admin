import { Schema, model, models } from 'mongoose'

const ImageUrlSchema = new Schema({
	url: { type: String, required: true },
})

const ProductSchema = new Schema({
	title: { type: String, require: true },
	description: { type: String },
	imageUrl: [{ type: ImageUrlSchema, required: true }],
	category: { type: String, required: true },
	price: { type: Number, required: true },
	size: { type: String, required: true },
	color: { type: String, required: true },
})

// Fixed issue with model already created
export const Product = models.Product || model('Product', ProductSchema)
