'use client'

import { useRouter } from 'next/router'
import { isClerkAPIResponseError, useSignIn } from '@clerk/nextjs'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { authSchema } from '@/lib/auth'
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
import { Button } from '@/components/ui/button'

export function SignInForm() {
	const router = useRouter()
	const { isLoaded, signIn, setActive } = useSignIn()
	const [isPending, startTransition] = useTransition()

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
				const result = await signIn.create({
					identifier: data.email,
					password: data.password,
				})

				if (result.status === 'complete') {
					await setActive({ session: result.createdSessionId })

					router.push(`${window.location.origin}/`)
				} else {
					console.log(result)
				}
			} catch (error) {
				const unknownError = 'Something weng wrong, please try again'

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
								<PasswordInput placeholder="**********" {...field} />
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
					Sign in
					<span className="sr-only">Sign in</span>
				</Button>
			</form>
		</Form>
	)
}
