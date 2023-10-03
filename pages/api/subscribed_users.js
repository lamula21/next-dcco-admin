// RouteControllers for http://localhost:3000/api/subscribed_users

import { mongooseConnect } from '@/lib/mongoose'
import { SubscribedUser } from '@/models/SubscribedUser'

export default async function handle(req, res) {
	const { method } = req

	// Working Connection
	await mongooseConnect()

	/* HTTPS METHODS */
	if (method === 'GET') {
		if (req.query?.id) {
			return res.json(await SubscribedUser.findOne({ _id: req.query.id }))
		}
		return res.json(await SubscribedUser.find())
	}

	if (method === 'POST') {
		const {
			email,
		} = req.body

		const subscribed_userDocument = await SubscribedUser.create({
			email,
		})

		res.json(subscribed_userDocument)
	}

	if (method === 'PUT') {
		const {
			_id,
			email,
		} = req.body

		await SubscribedUser.findByIdAndUpdate(_id, {
			email,
		})

		res.json(true)
	}

	if (method === 'DELETE') {
		if (req.query?.id) {
			await SubscribedUser.findOneAndDelete({ _id: req.query.id })
			res.json(true)
		}
	}
}
