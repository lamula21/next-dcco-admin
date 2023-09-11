import * as z from 'zod'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { format } from "date-fns"


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
import { DatePicker } from '@/components/ui/date-picker'
import { ImageUpload } from '../ImageUpload'

const formSchema = z.object({
	title: z.string().min(1),
	content: z.object(),
	url: z.string().min(0),
	author: z.string().min(0),
	authorDetail: z.string().min(0),
	sendData: z.date(),
	imageUrl: z.string().array()
})

export const NewsletterForm = ({ initialData }) => {
	const router = useRouter()

	const [loading, SetLoading] = useState(false)

	const toastMessage = initialData ? 'Newsletter updated.' : 'Newsletter created.'
	const action = initialData ? 'Save changes' : 'Create'

	const defaultValues = initialData ||
		 {
				title: '',
				content: {},
				url: '',
				imageUrl: [],
				author: '',
				authorDetail: '',
				sendData: ''
		  }

	const form = useForm({
		resolve: zodResolver(formSchema),
		defaultValues,
	})

	async function onSubmit(data) {
		try {
			SetLoading(true)

			if (initialData) {
				await axios.put('/api/newsletters', data)
			} else {
				await axios.post('/api/newsletters', data)
			}
			router.push('/newsletters')
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
					<div className='md:grid md:grid-cols-3 gap-8'>
						<FormField
							control={form.control}
							name='title'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input
											required
											disabled={loading}
											placeholder='Newsletter name'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='author'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Author</FormLabel>
									<FormControl>
									<Input
											disabled={loading}
											placeholder='Author name'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='authorDetail'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Author details</FormLabel>
									<FormControl>
									<Input
											disabled={loading}
											placeholder='Author details'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

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

					<Button disabled={loading} className='ml-auto' type='submit'>
						{action}
					</Button>
				</form>
			</Form>
		</>
	)
}
