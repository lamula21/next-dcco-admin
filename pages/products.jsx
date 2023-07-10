import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import axios from 'axios'

import { Layout } from '@/components/Layout'
import Heading from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export default function Products() {
	const [products, setProducts] = useState([])
	const router = useRouter()

	// useEffect for fetching
	useEffect(() => {
		// Fetch GET - get products from DB
		axios.get('/api/products').then((response) => {
			setProducts(response.data)
		})
	}, [])

	return (
		<Layout>
			<div className="flex items-center justify-between">
				<Heading title="Products (0)" description="Manage products for DCCO" />

				<Button
					onClick={() => router.push(`/products/new`)}
					variant="default"
					size="sm"
				>
					<Plus className="mr-2 h-4 w-4" />
					<span>Add new</span>
				</Button>
			</div>

			<Separator className="mt-4" />

			{/* <Link className="btn-primary" href={'/products/new'}>
				Add new product
			</Link> */}

			<table className="basic mt-4">
				<thead>
					<tr>
						<td>Product Name</td>
						<td></td>
					</tr>
				</thead>

				<tbody>
					{products.map((product) => (
						<tr key={product._id}>
							<td>{product.title}</td>

							<td>
								<Link
									className="btn edit btn-link btn-sm rounded-full"
									href={'/products/edit/' + product._id}
								>
									Edit
								</Link>

								<Link
									className="btn delete btn-link btn-sm rounded-full"
									href={'/products/delete/' + product._id}
								>
									Delete
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Layout>
	)
}
