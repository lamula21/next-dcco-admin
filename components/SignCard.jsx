import React from 'react'
import Link from 'next/link'
import { OAuthSignIn } from './auth/oauth-signin'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card'

export default function SignCard({ signOption, children }) {
	return signOption === 'signIn' ? (
		<div>
			<Card>
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">Sign In</CardTitle>
					<CardDescription>
						Choose your preferred sign in method
					</CardDescription>
				</CardHeader>

				<CardContent className="grip gap-4">
					<OAuthSignIn />

					<div className="relative">
						<div className="abosulute inset-0 flex items-center">
							<span className="w-full border-t" />
						</div>

						<div className="relative flex justify-center">
							<span className="bg-background px-2 text-muted-foreground">
								Or continue with
							</span>
						</div>
					</div>

					<SignInForm />
				</CardContent>

				<CardFooter className="flex flex-wrap items-center space-x-2">
					<div className="flex-1 text-sm text-muted-foreground">
						Don&apos;t have an account?
						<Link
							aria-label="Sign up"
							href="/"
							className="text-primary underline-offset-4 transition-colors hover:underline"
						>
							Sign up
						</Link>
					</div>
					<Link
						aria-label="Rset password"
						href="/"
						className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
					>
						Reset password
					</Link>
				</CardFooter>
			</Card>
		</div>
	) : (
		<div>
			<Card>
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">Sign up</CardTitle>
					<CardDescription>
						Choose your preferred sign in method
					</CardDescription>
				</CardHeader>

				<CardContent className="grid gap-4">
					<OAuthSignIn />

					<div className="relative">
						<div className="abosulute inset-0 flex items-center">
							<span className="w-full border-t" />
						</div>

						<div className="relative flex justify-center">
							<span className="bg-background px-2 text-muted-foreground">
								Or continue with
							</span>
						</div>
					</div>

					<SignUpForm />
				</CardContent>

				<CardFooter className="grid gap-4">
					<div className="text-sm text-muted-foreground">
						Already have an account?
						<Link
							aria-label="Sign in"
							href="/"
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
