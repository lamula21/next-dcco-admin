import { Resend } from 'resend'
import { DefaultEmail } from '@/components/defaultEmail'
import { mongooseConnect } from '@/lib/mongoose'
import { SubscribedUser } from '@/models/SubscribedUser'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
	const { content, subject } = req.body

	const subscribed_users = await SubscribedUser.find()

	try {
		subscribed_users.forEach(async (subscribed_user) => {
			const data = await resend.emails.send({
				from: 'Acme <onboarding@resend.dev>',
				to: subscribed_user.email,
				subject,
				react: <DefaultEmail data={content} />,
			})
		})

		res.status(200).json({ message: 'all ok' })
	} catch (error) {
		res.status(400).json(error)
	}
}
