import React from 'react'
import Link from 'next/link'
import { OAuthSignIn } from './auth/oauth-signin'
import { SignInForm } from './forms/signin-form'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card'
import Image from 'next/image'

export function SignInCard() {
	return (
		<div>
			<Card>
				<CardHeader className="space-y-5">
					<Image
						className="mx-auto"
						alt="DC Code Logo"
						src={
							'https://dccodeofficials.com/wp-content/uploads/2023/07/cropped-dc-code-logo-img-removebg-preview.png'
						}
						width="50"
						height="50"
					/>
					<div>
						{' '}
						<CardTitle className="text-center text-2xl">Sign In</CardTitle>
						<CardDescription className="text-center">
							Choose your preferred sign in method
						</CardDescription>
					</div>
				</CardHeader>

				<CardContent className="p-6 pt-0 grid gap-4">
					<OAuthSignIn />

					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t" />
						</div>

						<div className="relative flex justify-center text-xs uppercase">
							<span className="bg-background px-2 text-muted-foreground">
								Or continue with
							</span>
						</div>
					</div>

					<SignInForm />
				</CardContent>

				<CardFooter className="flex flex-wrap items-center space-x-2">
					<div className="flex-1 text-sm text-muted-foreground">
						Don&apos;t have an account?{' '}
						<Link
							aria-label="Sign up"
							href="/sign-up"
							className="text-primary underline-offset-4 transition-colors hover:underline"
						>
							Sign up
						</Link>
					</div>
					<Link
						aria-label="Reset password"
						href="/"
						className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
					>
						Reset password
					</Link>
				</CardFooter>
			</Card>
		</div>
	)
}
