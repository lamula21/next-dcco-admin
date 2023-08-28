import { Layout } from '@/components/Layout'
import { Separator } from '@/components/ui/separator'
import Heading from '@/components/Heading'
import { EventForm } from '@/components/forms/event-form'
import { PreviousButton } from '@/components/ui/previous'
import { useRouter } from 'next/router'

export default function NewEvent() {
	return (
		<Layout>
			<PreviousButton />
			<Heading title='Create Event' description='Add new event' />
			<Separator className='mt-4' />
			<EventForm />
		</Layout>
	)
}
