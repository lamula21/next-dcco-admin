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
	description: z.string().min(0),
	date: z.string().min(1),
	init_time: z.string().min(1),
	end_time: z.string().min(1),
	imageUrl: z.string().array(),
	address: z.string().min(0),
	url: z.string().min(0),
	subtitle: z.string().min(0),
})

export const EventForm = ({ initialData }) => {
	const router = useRouter()

	const [loading, SetLoading] = useState(false)

	const toastMessage = initialData ? 'Event updated.' : 'Event created.'
	const action = initialData ? 'Save changes' : 'Create'

	const defaultValues = initialData ||
		 {
				title: '',
				description: '',
				address: '',
				imageUrl: [],
				init_time: '',
				end_time: '',
				date: '',
				url: '',
				subtitle: ''
		  }

	const form = useForm({
		resolve: zodResolver(formSchema),
		defaultValues,
	})

	async function onSubmit(data) {
		try {
			SetLoading(true)

			if (initialData) {
				await axios.put('/api/events', data)
			} else {
				await axios.post('/api/events', data)
			}
			router.push('/events')
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
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											required
											disabled={loading}
											placeholder='Event name'
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
							name='address'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Address</FormLabel>
									<FormControl>
									<Input
											disabled={loading}
											placeholder='Event address'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='url'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Url</FormLabel>
									<FormControl>
									<Input
											disabled={loading}
											placeholder='Event url'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='subtitle'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Subtitle</FormLabel>
									<FormControl>
									<Input
											disabled={loading}
											placeholder='Event subtitle'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='date'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Date</FormLabel>
									<FormControl>
										<DatePicker 
											value={field.value}
											onChange={(date) => field.onChange(format(date, "PPP"))}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='init_time'
							render={({ field }) => (
								<FormItem>
									<FormLabel>From:</FormLabel>
									<FormControl>
									<Input
											required
											type="time"
											disabled={loading}
											placeholder='Event name'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='end_time'
							render={({ field }) => (
								<FormItem>
									<FormLabel>To:</FormLabel>
									<FormControl>
									<Input
											required
											type="time"
											disabled={loading}
											placeholder='Event name'
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
