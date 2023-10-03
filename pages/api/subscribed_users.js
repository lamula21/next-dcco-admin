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
		const { fullname, email } = JSON.parse(req.body)

		const subscriberDB = await SubscribedUser.findOne({ email })

		console.log(fullname, email)
		console.log(subscriberDB)

		if (subscriberDB) {
			return res.status(400).json({
				message: 'You have already subscribed to our newsletter.',
			})
		}

		const subscribed_userDocument = await SubscribedUser.create({
			fullname,
			email,
		})

		const savedSubscriber = await subscribed_userDocument.save()

		console.log(savedSubscriber)

		res.status(200).json(savedSubscriber)
	}

	if (method === 'PUT') {
		const { _id, email } = req.body

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
