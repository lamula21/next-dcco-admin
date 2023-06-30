import { Layout } from '@/components/Layout'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { UploadIcon } from './Icons/UploadIcon'

/* This ProductForm component either create or edit a product */
export const ProductForm = ({
	// Note: title: titleInfo => renames title to titleInfo
	_id,
	title: titleInfo,
	description: descriptionInfo,
	price: priceInfo,
	images,
}) => {
	const [title, setTitle] = useState(titleInfo || '')
	const [description, setDescription] = useState(descriptionInfo || '')
	const [price, setPrice] = useState(priceInfo || '')
	const router = useRouter()

	async function createOrEditProduct(e) {
		e.preventDefault()
		const data = { title, description, price }

		if (_id) {
			// If id shown, edit product
			await axios.put('/api/products', { ...data, _id }).then((response) => {
				if (response.data) {
					console.log('Product updated Successfully')
				} else {
					console.log('Error. No changes were made in DB')
				}
			})
		} else {
			// If no id, create product
			await axios.post('/api/products', data) // Fetch POST - add new products to DB
		}
		// redirect back to "/products" once new product added
		router.push('/products')
	}

	async function uploadImage(e) {
		const files = e.target?.files

		if (files?.length > 0) {
			const data = new FormData()
			for (const file of files) {
				data.append('file', file)
			}

			const res = await axios.post('/api/upload', data, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			console.log(res.data)
		}
	}

	return (
		<form onSubmit={createOrEditProduct}>
			<label>Product Name</label>
			<input
				type="text"
				placeholder="product name"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<label>Photos</label>
			<div className="mb-2">
				<label className="w-24 h-24 border flex flex-col items-center justify-center text-sm gap-1 text-gray-500 rounded-lg bg-gray-200 cursor-pointer">
					<UploadIcon></UploadIcon>
					<span>Upload</span>
					<input type="file" className="hidden" onChange={uploadImage} />
				</label>
				{!images?.length && <div>No Photos in this product</div>}
			</div>

			<label>Description</label>
			<textarea
				placeholder="description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			></textarea>

			<label>Price (in USD)</label>
			<input
				type="text"
				placeholder="price"
				value={price}
				onChange={(e) => setPrice(e.target.value)}
			/>

			<button type="submit" className="btn-primary">
				Save
			</button>
		</form>
	)
}
