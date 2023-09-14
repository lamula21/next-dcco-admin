// /events/edit/[...id].js  <=>  https:localhost:3000/events/edit/:id
import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { EventForm } from '@/components/forms/event-form'
import Heading from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { PreviousButton } from '@/components/ui/previous'
import { Skeleton } from '@/components/ui/skeleton'

export default function EditEventPage() {
	const router = useRouter()
	const { id } = router.query // retrieve id from url
	const [eventInfo, setEventInfo] = useState(null)
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		if (id) {
			axios.get('/api/events?id=' + id).then((response) => {
				setEventInfo(response.data)
				setLoading(false)
			})
		}
	}, [id])

	return (
		<Layout>
			<PreviousButton />
			<Heading title="Edit event" description="Edit a event" />
			<Separator className="mt-4" />
			{isLoading && (
				<div className="flex flex-col gap-10">
					<div className="md:grid md:grid-cols-3 gap-8">
						<div className="flex flex-col gap-1">
							<Skeleton className="h-5 w-[60px] bg-gray-300" />
							<Skeleton className="h-8 w-full bg-gray-200" />
						</div>

						<div className="flex flex-col gap-1">
							<Skeleton className="h-5 w-[60px] bg-gray-300" />
							<Skeleton className="h-20 w-full bg-gray-200" />
						</div>

						<div className="flex flex-col gap-1">
							<Skeleton className="h-5 w-[60px] bg-gray-300" />
							<Skeleton className="h-8 w-full bg-gray-200" />
						</div>

						<div className="flex flex-col gap-1">
							<Skeleton className="h-5 w-[60px] bg-gray-300" />
							<Skeleton className="h-8 w-full bg-gray-200" />
						</div>

						<div className="flex flex-col gap-1">
							<Skeleton className="h-5 w-[60px] bg-gray-300" />
							<Skeleton className="h-8 w-full bg-gray-200" />
						</div>

						<div className="flex flex-col gap-1">
							<Skeleton className="h-5 w-[60px] bg-gray-300" />
							<Skeleton className="h-8 w-full bg-gray-200" />
						</div>
					</div>

					<div className="flex flex-col mt-4 gap-6">
						<div className="flex flex-col gap-2">
							<Skeleton className="h-5 w-[60px] bg-gray-300" />
							<Skeleton className="w-[220px] h-[250px] bg-gray-200" />
						</div>

						<Skeleton className="h-8 w-[120px] rounded-md bg-gray-200" />
					</div>
				</div>
			)}
			{eventInfo && <EventForm initialData={eventInfo}></EventForm>}
		</Layout>
	)
}
