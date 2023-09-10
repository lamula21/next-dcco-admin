import { useRouter } from 'next/navigation'
import axios from 'axios'

import { Layout } from '@/components/Layout'
import Heading from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { format } from 'date-fns'
import { DataTable } from '@/components/DataTable'
import { columns } from '@/components/Columns'
import { ApiList } from '@/components/ApiList'
import { fetchData } from '@/services/fetchData'

export default function ProductsPage({ products }) {
	const router = useRouter()

	// Removing unnecessary fields
	const formattedProducts = products.map((item) => ({
		id: item._id,
		title: item.title,
		description: item.description,
		category: item.category,
		price: `$${item.price}`,
		size: item.size,
		color: item.color,
		createdAt: format(new Date(item.createdAt), 'MMMM do, yyyy'),
	}))

	return (
		<Layout>
			<div className="flex items-center justify-between">
				<Heading
					title={`Products (${products.length})`}
					description="Manage products for DCCO"
				/>

				<Button
					onClick={() => router.push(`/products/new`)}
					variant="default"
					size="sm"
				>
					<Plus className="mr-2 h-4 w-4" />
					<span>Add new</span>
				</Button>
			</div>
			<Separator />
			{/* searchKey = accessorKey from @/components/Columns  */}
			<DataTable searchKey="title" columns={columns} data={formattedProducts} />

			<Heading title="API" description="API Calls for Products" />
			<Separator />
			<ApiList entityName="products" entityIdName="productID" />
		</Layout>
	)
}

/* SERVER-SIDE FETCH */
export async function getServerSideProps() {
	const products = await fetchData('/api/products')
	return {
		props: { products },
	}
}
