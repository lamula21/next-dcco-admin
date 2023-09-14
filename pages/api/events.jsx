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
		const { title, description, imageUrl, date, init_time, end_time, address, url, subtitle } =
			req.body

		const eventDocument = await Event.create({
			title,
			description,
			address,
			imageUrl,
			date,
			init_time,
			end_time,
			url,
			subtitle
		})
		res.json(eventDocument)
	}

	if (method === 'PUT') {
		const { _id, title, description, imageUrl, date, init_time, end_time, address, url, subtitle } =
			req.body

		await Event.findByIdAndUpdate(_id, {
			title,
			description,
			imageUrl,
			date,
			init_time,
			end_time,
			address,
			url,
			subtitle
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
