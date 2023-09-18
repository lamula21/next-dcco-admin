'use client'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { isClerkAPIResponseError, useSignUp } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { authSchema } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Icons } from '@/components/Icons/icons'
import { PasswordInput } from '@/components/PasswordInput'

export function SignUpForm() {
	const router = useRouter()
	const { isLoaded, signUp } = useSignUp()
	const [isPending, startTransition] = useTransition()

	// react-hook-form
	const form = useForm({
		resolver: zodResolver(authSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	function onSubmit(data) {
		if (!isLoaded) return

		startTransition(async () => {
			try {
				await signUp.create({
					emailAddress: data.email,
					password: data.password,
				})

				// Send email verification code
				await signUp.prepareEmailAddressVerification({
					strategy: 'email_code',
				})

				router.push('/sign-up/verify-email')
				toast.message('Check your email', {
					description: 'We sent you a 6-digit verification code.',
				})
			} catch (error) {
				const unknownError = 'Something went wrong, please try again.'

				isClerkAPIResponseError(error)
					? toast.error(error.errors[0]?.longMessage ?? unknownError)
					: toast.error(unknownError)
			}
		})
	}

	return (
		<Form {...form}>
			<form
				className="grid gap-4"
				onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="example@domain.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<PasswordInput placeholder="Password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button disabled={isPending}>
					{isPending && (
						<Icons.spinner
							className="mr-2 h-4 w-4 animate-spin"
							aria-hidden="true"
						/>
					)}
					Continue
					<span className="sr-only">Continue to email verification page</span>
				</Button>
			</form>
		</Form>
	)
}
