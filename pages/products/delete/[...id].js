// /products/delete/[...id].js  <=>  https:localhost:3000/products/delete/:id

import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function DeleteProductPage() {
	const router = useRouter()
	const { id } = router.query // retrieve id from url
	const [productInfo, setProductInfo] = useState(null)

	function cancel() {
		router.push('/products')
	}

	async function deleteProduct() {
		try {
			await axios.delete('/api/products?id=' + id)
			toast.success('Product deleted succesfully.')
			router.push('/products')
		} catch (error) {
			toast.error('Something went wrong.')
		}
	}

	useEffect(() => {
		if (id) {
			axios.get('/api/products?id=' + id).then((response) => {
				setProductInfo(response.data)
			})
		}
	}, [id])

	return (
		<Layout>
			<h1 className="text-center">
				Do you really want to delete &quot;{productInfo?.title}&quot;?
			</h1>
			<div className="flex justify-center gap-2">
				<button className="btn-default" onClick={cancel}>
					Cancel
				</button>
				<button className="btn-red" onClick={deleteProduct}>
					Delete
				</button>
			</div>
		</Layout>
	)
}

// Two ways to pass a function into on[Property] prop
// onClick = { () => onDelete()} iff onDelete is an arrow function
// onClick = {onDelete} iff onDelete is a function
