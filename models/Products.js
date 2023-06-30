import { Schema, model, models } from 'mongoose'

const ProductSchema = new Schema({
	title: { type: String, require: true },
	description: String,
	price: { type: Number, required: true },
})

// Fixed issue with model already created
export const Product = models.Product || model('Product', ProductSchema)
