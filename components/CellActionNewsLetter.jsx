import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'sonner'
import { Button } from './ui/button'

export const CellActionNewsletter = ({ data, route }) => {
	const router = useRouter() // manipulate url and navigation

	const [loading, SetLoading] = useState(false)

	const refreshData = () => {
		router.replace(router.asPath)
	}

	const sendEmail = async () => {
		console.log({data})
		try {
			SetLoading(true)
			const sentEmail = await axios.post("/api/send", {})

			const sendDate = new Date() 

			const newData = {...data, sendDate: sendDate.toLocaleString(), _id: data.id}

			const updatedNewsletter = await axios.put('/api/newsletters', newData)

			if (sentEmail.data && updatedNewsletter.data) toast.success('Sent successfully.')
		} catch (error) {
			toast.error('Something went wrong in our servers.')
		} finally {
			SetLoading(false)
			refreshData()
		}
	}

	return (
		<>
			{
				data.sendDate 
				? <>{data.sendDate}</>
				: <Button disabled={loading} variant="secondary" onClick={sendEmail}>Send</Button> 
			}
		</>
	)
}
