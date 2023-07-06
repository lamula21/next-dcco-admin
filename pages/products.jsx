import { Layout } from '@/components/Layout'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'

export default function Products() {
	const [products, setProducts] = useState([])

	// useEffect for fetching
	useEffect(() => {
		// Fetch GET - get products from DB
		axios.get('/api/products').then((response) => {
			setProducts(response.data)
		})
	}, [])

	return (
		<Layout>
			<Link className="btn-primary" href={'/products/new'}>
				Add new product
			</Link>

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
