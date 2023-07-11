// RouteControllers for http://localhost:3000/api/products

import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Products'

export default async function handle(req, res) {
	const { method } = req

	// Working Connection
	await mongooseConnect()

	/* HTTPS METHODS */
	if (method === 'GET') {
		if (req.query?.id) {
			return res.json(await Product.findOne({ _id: req.query.id }))
		}
		return res.json(await Product.find())
	}

	if (method === 'POST') {
		const { title, description, imageUrl, category, price, size, color } =
			req.body

		const productDocument = await Product.create({
			title,
			description,
			imageUrl,
			category,
			price,
			size,
			color,
		})

		res.json(productDocument)
	}

	if (method === 'PUT') {
		const { title, description, price, _id } = req.body

		await Product.findByIdAndUpdate(_id, { title, description, price })

		res.json(true)
	}

	if (method === 'DELETE') {
		if (req.query?.id) {
			await Product.findOneAndDelete({ _id: req.query.id })
			res.json(true)
		}
	}
}
