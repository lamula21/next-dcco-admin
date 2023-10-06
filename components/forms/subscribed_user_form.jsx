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
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
	email: z.string().min(1),
	fullname: z.string().min(1)
})

export const SubscribedUserForm = ({ initialData }) => {
	const router = useRouter()

	const [loading, SetLoading] = useState(false)

	const toastMessage = initialData ? 'SubscribedUser updated.' : 'SubscribedUser created.'
	const action = initialData ? 'Save changes' : 'Create'

	const defaultValues = initialData || {
		fullname: '',
		email: '',
	}

	const form = useForm({
		resolve: zodResolver(formSchema),
		defaultValues,
	})

	async function onSubmit(data) {
		try {
			SetLoading(true)

			if (initialData) {
				await axios.put('/api/subscribed_users', data)
			} else {
				await axios.post('/api/subscribed_users', data)
			}
			router.push('/subscribed_users')
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
					className="mt-4 space-y-12 w-full"
				>
					<div className="md:grid md:grid-cols-3 gap-8">
						<FormField
							control={form.control}
							name="fullname"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Fullname</FormLabel>
									<FormControl>
										<Input
											required
											disabled={loading}
											placeholder="Fullname"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											required
											type='email'
											disabled={loading}
											placeholder="Email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						
					</div>

					<Button disabled={loading} className="ml-auto" type="submit">
						{action}
					</Button>
				</form>
			</Form>
		</>
	)
}
