import { useRouter } from 'next/navigation'

import { Layout } from '@/components/Layout'
import Heading from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { DataTable } from '@/components/DataTable'
import { columnsEvent } from '@/components/ColumnsEvent'
import { ApiList } from '@/components/ApiList'
import { fetchData } from '@/services/fetchData'

export default function EventsPage({ events }) {
	const router = useRouter()

	// Removing unnecessary fields
	const formattedEvents = events.map((item) => ({
		id: item._id,
		title: item.title,
		description: item.description,
		date: item.date,
		hour: `${item.init_time} - ${item.end_time}`,
	}))

	return (
		<Layout>
			<div className="flex items-center justify-between">
				<Heading
					title={`Events (${events.length})`}
					description="Manage events for DCCO"
				/>

				<Button
					onClick={() => router.push(`/events/new`)}
					variant="default"
					size="sm"
				>
					<Plus className="mr-2 h-4 w-4" />
					<span>Add new</span>
				</Button>
			</div>
			<Separator />

			{/* searchKey = accessorKey from @/components/Columns  */}
			<DataTable
				searchKey="title"
				columns={columnsEvent}
				data={formattedEvents}
			/>

			<Heading title="API" description="API Calls for Events" />
			<Separator />
			<ApiList entityName="events" entityIdName="eventID" />
		</Layout>
	)
}

/* SERVER-SIDE FETCH */
export async function getServerSideProps() {
	const events = await fetchData('/api/events')
	return {
		props: { events },
	}
}
