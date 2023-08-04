import * as z from 'zod'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormDescription,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { ImageUpload } from '../ImageUpload'

const formSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(0),
	imageUrl: z.string().array(),
	category: z.string().min(1),
	price: z.coerce.number().min(1),
	size: z.string().min(1),
	color: z.string().min(1),
})

export const ProductForm = ({ initialData }) => {
	const router = useRouter()

	const [loading, SetLoading] = useState(false)

	const toastMessage = initialData ? 'Product updated.' : 'Product created.'
	const action = initialData ? 'Save changes' : 'Create'

	const defaultValues = initialData
		? { ...initialData, price: parseFloat(String(initialData?.price)) }
		: {
				title: '',
				description: '',
				imageUrl: [],
				category: '',
				price: 0,
				size: '',
				color: '',
		  }

	const form = useForm({
		resolve: zodResolver(formSchema),
		defaultValues,
	})

	async function onSubmit(data) {
		try {
			SetLoading(true)

			if (initialData) {
				await axios.put('/api/products', data)
			} else {
				await axios.post('/api/products', data)
			}
			router.push('/products')
			toast.success(toastMessage)
		} catch (error) {
			toast.error('Something went wrong.')
		} finally {
			SetLoading(false)
		}
	}

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='mt-4 space-y-12 w-full'>
					<FormField
						control={form.control}
						name='imageUrl'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Images</FormLabel>
								<FormControl>
									<ImageUpload
										value={field.value.map((image) => image)}
										onChange={(url) => field.onChange([...field.value, url])}
										onRemove={(url) =>
											field.onChange([
												...field.value.filter((current) => current !== url),
											])
										}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className='md:grid md:grid-cols-3 gap-8'>
						<FormField
							control={form.control}
							name='title'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											disabled={loading}
											placeholder='Product name'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='price'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Price</FormLabel>
									<FormControl>
										<Input
											type='number'
											disabled={loading}
											placeholder='9.99'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='category'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Category</FormLabel>
									<FormControl>
										<Input
											disabled={loading}
											placeholder='T-shirt'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='description'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea
											disabled={loading}
											placeholder='Say something about this item'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='size'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Size</FormLabel>
									<FormControl>
										<Input disabled={loading} placeholder='Small' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='color'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Color</FormLabel>
									<FormControl>
										<Input disabled={loading} placeholder='Black' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<Button disabled={loading} className='ml-auto' type='submit'>
						{action}
					</Button>
				</form>
			</Form>
		</>
	)
}
