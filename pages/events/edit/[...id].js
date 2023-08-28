// /products/edit/[...id].js  <=>  https:localhost:3000/products/edit/:id
import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { ProductForm } from '@/components/forms/product-form'
import Heading from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { PreviousButton } from '@/components/ui/previous'

// fetch DB to get products and display it on the form
// data, Pass data into Product form
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
			<PreviousButton />
			<Heading title='Edit product' description='Edit a product' />
			<Separator className='mt-4' />
			{productInfo && <ProductForm initialData={productInfo}></ProductForm>}
		</Layout>
	)
}
