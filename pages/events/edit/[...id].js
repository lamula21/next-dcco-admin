// /events/edit/[...id].js  <=>  https:localhost:3000/events/edit/:id
import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { EventForm } from '@/components/forms/event-form'
import Heading from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { PreviousButton } from '@/components/ui/previous'

export default function EditEventPage() {
	const router = useRouter()
	const { id } = router.query // retrieve id from url
	const [eventInfo, setEventInfo] = useState(null)

	useEffect(() => {
		if (id) {
			axios.get('/api/events?id=' + id).then((response) => {
				setEventInfo(response.data)
			})
		}
	}, [id])

	return (
		<Layout>
			<PreviousButton />
			<Heading title="Edit event" description="Edit a event" />
			<Separator className="mt-4" />
			{eventInfo && <EventForm initialData={eventInfo}></EventForm>}
		</Layout>
	)
}
