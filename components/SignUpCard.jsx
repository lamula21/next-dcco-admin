import React from 'react'
import Link from 'next/link'
import { OAuthSignIn } from './auth/oauth-signin'
import { SignUpForm } from './forms/signup-form'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card'
import Image from 'next/image'

export function SignUpCard() {
	return (
		<div>
			<Card>
				<CardHeader className="space-y-1 text-center">
					<Image
						className="mx-auto"
						alt="DC Code Logo"
						src={
							'https://dccodeofficials.com/wp-content/uploads/2023/07/cropped-dc-code-logo-img-removebg-preview.png'
						}
						width="50"
						height="50"
					/>
					<CardTitle className="text-2xl">Sign Up</CardTitle>
					<CardDescription>
						Choose your preferred sign in method
					</CardDescription>
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

					<SignUpForm />
				</CardContent>

				<CardFooter className="grid gap-4">
					<div className="text-sm text-muted-foreground">
						Already have an account?{' '}
						<Link
							aria-label="Sign in"
							href="/sign-in"
							className="text-primary underline-offset-4 transition-colors hover:underline"
						>
							Sign in
						</Link>
					</div>
				</CardFooter>
			</Card>
		</div>
	)
}
