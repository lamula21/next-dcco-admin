import { useRouter } from 'next/navigation'

import { Layout } from '@/components/Layout'
import Heading from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { DataTable } from '@/components/DataTable'
import { columnsSubscribedUser } from '@/components/ColumnsSubscribedUser'
import { ApiList } from '@/components/ApiList'
import { fetchData } from '@/services/fetchData'

export default function SubscribedUsersPage({ subscribed_users }) {
	const router = useRouter()

	// Removing unnecessary fields
	const formattedSubscribedUsers = subscribed_users.map((item) => ({
		id: item._id,
		email: item.email,
		created_at: item.createdAt,
	}))

	return (
		<Layout>
			<div className="flex items-center justify-between">
				<Heading
					title={`SubscribedUsers (${subscribed_users.length})`}
					description="Manage subscribed_users for DCCO"
				/>

				<Button
					onClick={() => router.push(`/subscribed_users/new`)}
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
				searchKey="email"
				columns={columnsSubscribedUser}
				data={formattedSubscribedUsers}
			/>

			<Heading title="API" description="API Calls for SubscribedUsers" />
			<Separator />
			<ApiList entityName="subscribed_users" entityIdName="subscribed_userID" />
		</Layout>
	)
}

/* SERVER-SIDE FETCH */
export async function getServerSideProps() {
	const subscribed_users = await fetchData('/api/subscribed_users')
	return {
		props: { subscribed_users },
	}
}
