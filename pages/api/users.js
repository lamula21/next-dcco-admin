// RouteControllers for http://localhost:3000/api/products
import bcrypt from 'bcryptjs'

import { mongooseConnect } from '@/lib/mongoose'
import { User } from '@/models/User'

export default async function handle(req, res) {
	const { method } = req

	// Working Connection
	await mongooseConnect()

	/* HTTPS METHODS */
	if (method === 'GET') {
		if (req.query?.id) {
			try {
				const user = await User.findOne({ _id: req.query.id })

				if (!user) {
					return res.status(400).json({ message: 'User not found' })
				}
				return res.status(200).json(user)
			} catch (error) {
				return res.status(500).json({ message: error.message })
			}
		} else if (req.query?.email) {
			try {
				const user = await User.findOne({ email: req.query.email }).select(
					'+password'
				)

				if (!user) {
					return res.status(400).json({ message: 'User not found' })
				}
				return res.status(200).json(user)
			} catch (error) {
				return res.status(500).json({ message: error.message })
			}
		}
		return res.json(await User.find())
	}

	if (method === 'POST') {
		const { email, password } = JSON.parse(req.body)

		console.log(email, password)

		try {
			const user = await User.findOne({ email })

			if (user) {
				return res
					.status(400)
					.json({ message: 'This email is already taken. Try another email.' })
			}

			// hash password with 12 salt
			const hashedPassword = await bcrypt.hash(password, 12)

			// create new user
			const newUser = await User.create({
				email,
				password: hashedPassword,
			})

			const savedUser = await newUser.save()

			return res.status(200).json({
				_id: savedUser._id,
				email: savedUser.email,
			})
		} catch (error) {
			return res.status(500).json({ message: error.message })
		}
	}

	if (method === 'PATCH') {
		try {
			const { _id, password, ...data } = req.body

			if (password) {
				const hashedPassword = await bcrypt.hash(password, 12)
				data.password = hashedPassword
			}

			const dataToUpdate = { ...data }

			console.log(dataToUpdate)

			await User.updateOne({ _id }, dataToUpdate)

			res.json(true)
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	if (method === 'DELETE') {
		if (req.query?.id) {
			try {
				await User.findOneAndDelete({ _id: req.query.id })
				res.json(true)
			} catch (error) {
				res.status(500).json({ message: error.message })
			}
		}
	}
}
