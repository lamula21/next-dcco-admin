// RouteControllers for http://localhost:3000/api/events

import { mongooseConnect } from '@/lib/mongoose'
import { Event } from '@/models/Event'

export default async function handle(req, res) {
	const { method } = req

	// Working Connection
	await mongooseConnect()

	/* HTTPS METHODS */
	if (method === 'GET') {
		if (req.query?.id) {
			return res.json(await Event.findOne({ _id: req.query.id }))
		}
		return res.json(await Event.find())
	}

	if (method === 'POST') {
		const { title, description, imageUrl, date, init_time, end_time, address  } =
			req.body

		const productDocument = await Event.create({
			title,
			description,
			address,
			imageUrl,
			date,
			init_time,
			end_time,
		})

		res.json(productDocument)
	}

	if (method === 'PUT') {
		const { _id, title, description, imageUrl, date, init_time, end_time, address  } =
			req.body

		console.log(req.body)

		await Event.findByIdAndUpdate(_id, {
			title,
			description,
			imageUrl,
			category,
			price,
			size,
			color,
		})

		res.json(true)
	}

	if (method === 'DELETE') {
		if (req.query?.id) {
			await Event.findOneAndDelete({ _id: req.query.id })
			res.json(true)
		}
	}
}