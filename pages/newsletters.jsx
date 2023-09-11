import { useRouter } from 'next/navigation'

import { Layout } from '@/components/Layout'
import Heading from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { DataTable } from '@/components/DataTable'
import { columnsNewsletter } from '@/components/ColumnsNewsletter'
import { ApiList } from '@/components/ApiList'
import { fetchData } from '@/services/fetchData'

export default function NewslettersPage({ newsletters }) {
	const router = useRouter()

	// Removing unnecessary fields
	const formattedNewsletters = newsletters.map((item) => ({
		id: item._id,
		title: item.title,
		author: item.author,
		sendDate: item.sendDate,
	}))

	return (
		<Layout>
			<div className="flex items-center justify-between">
				<Heading
					title={`Newsletters (${newsletters.length})`}
					author="Manage newsletters for DCCO"
				/>

				<Button
					onClick={() => router.push(`/newsletters/new`)}
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
				columns={columnsNewsletter}
				data={formattedNewsletters}
			/>

			<Heading title="API" author="API Calls for Newsletters" />
			<Separator />
			<ApiList entityName="newsletters" entityIdName="newsletterID" />
		</Layout>
	)
}

/* SERVER-SIDE FETCH */
export async function getServerSideProps() {
	const newsletters = await fetchData('/api/newsletters')
	return {
		props: { newsletters },
	}
}
