// /products/edit/[...id].js  <=>  https:localhost:3000/products/edit/:id

import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductForm } from '@/components/ProductForm'

export default function EditProductPage() {
	const router = useRouter()
	const { id } = router.query // retrieve id from url
	const [productInfo, setProductInfo] = useState(null)

	useEffect(() => {
		if (id) {
			// GET - fetch with a query to DB to retrieve single document by id
			// from /api/products.jsx
			axios.get('/api/products?id=' + id).then((response) => {
				setProductInfo(response.data)
			})
		}
	}, [id])

	// Note: ...productInfo (spread operator) passes individual props to the component
	return (
		<Layout>
			<h1>Edit Product</h1>
			{productInfo && <ProductForm {...productInfo}></ProductForm>}
		</Layout>
	)
}
