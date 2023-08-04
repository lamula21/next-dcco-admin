import { DataTable } from '@/components/DataTable'
import Heading from '@/components/Heading'
import { Layout } from '@/components/Layout'
import { Separator } from '@/components/ui/separator'
import { columns } from '@/components/OrderColumns'

export default function orders() {
	const formattedProducts = [
		{
			id: 123,
			phone: '123-123-1234',
			address: '11223 DC Washington',
			products: 'camera, tshirt',
			totalPrice: 200,
			isPaid: true,
			createdAt: 'July 10th, 2023',
		},
		{
			id: 123,
			phone: '123-123-1234',
			address: '11223 DC Washington',
			products: 'iphone',
			totalPrice: 200,
			isPaid: true,
			createdAt: 'July 10th, 2023',
		},

		{
			id: 1234,
			phone: '222-222-2222',
			address: '11223 Seatle',
			products: 'membership',
			totalPrice: 1000,
			isPaid: true,
			createdAt: 'July 10th, 2023',
		},

		{
			id: 1235,
			phone: '444-444-4444',
			address: '11223 DC Washington',
			products: 'tshirt, membership',
			totalPrice: 2000,
			isPaid: false,
			createdAt: 'July 10th, 2023',
		},
	]

	return (
		<Layout>
			<div className="flex items-center justify-between">
				<Heading
					title={`Orders (${formattedProducts.length})`}
					description="Manage orders for DCCO"
				/>
			</div>
			<Separator />
			{/* searchKey = accessorKey from @/components/Columns  */}
			<DataTable
				searchKey="products"
				columns={columns}
				data={formattedProducts}
			/>
		</Layout>
	)
}
