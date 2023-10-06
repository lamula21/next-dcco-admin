// RouteControllers for http://localhost:3000/api/newsletters

import { mongooseConnect } from '@/lib/mongoose'
import { Newsletter } from '@/models/Newsletter'

export default async function handle(req, res) {
	const { method } = req

	// Working Connection
	await mongooseConnect()

	/* HTTPS METHODS */
	if (method === 'GET') {
		if (req.query?.id) {
			return res.json(await Newsletter.findOne({ _id: req.query.id }))
		}
		if (req.query?.titleUrl) {
			return res.json(await Newsletter.findOne({ titleUrl: req.query.titleUrl }))
		}
		return res.json(await Newsletter.find())
	}

	if (method === 'POST') {
		const { title, content, imageUrl, url, author, authorDetail, sendDate } = req.body

		const titleUrl = title.toLowerCase().split(' ').join('-');

		const newsletterDocument = await Newsletter.create({
			title,
			content,
			sendDate,
			imageUrl,
			url,
			titleUrl,
			author,
			authorDetail,
		})

		res.json(newsletterDocument)
	}

	if (method === 'PUT') {
		const {
			_id,
			title,
			content,
			imageUrl,
			url,
			author,
			authorDetail,
			sendDate,
		} = req.body

		const titleUrl = title.toLowerCase().split(' ').join('-');

		await Newsletter.findByIdAndUpdate(_id, {
			title,
			titleUrl,
			content,
			imageUrl,
			url,
			author,
			authorDetail,
			sendDate,
		})

		res.json(true)
	}

	if (method === 'DELETE') {
		if (req.query?.id) {
			await Newsletter.findOneAndDelete({ _id: req.query.id })
			res.json(true)
		}
	}
}
