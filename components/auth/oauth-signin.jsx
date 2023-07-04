'use client'

import { isClerkAPIResponseError, useSignIn } from '@clerk/nextjs'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Icons } from '@/components/Icons/icons'

const oauthProviders = [
	{ name: 'Google', strategy: 'oauth_google', icon: 'google' },
	{ name: 'Facebook', strategy: 'oauth_facebook', icon: 'facebook' },
	{ name: 'Discord', strategy: 'oauth_discord', icon: 'discord' },
]

export function OAuthSignIn() {
	const [isLoading, setIsLoading] = useStae(null)
	const { signIn, signInLoaded } = useSignIn()

	async function oauthSignIn(provider) {
		if (!signInLoaded) return null

		try {
			setIsLoading(provider)
			await signIn.authenticateWithRedirect({
				strategy: provider,
				redirectUrl: '/sso-callback',
				redirectUrlComplete: '/',
			})
		} catch (error) {
			setIsLoading(null)

			const unknownError = 'Something went wrong, please try again.'

			isClerkAPIResponseError(error)
				? toast.error(error.errors[0]?.longMessage ?? unkownerror)
				: toast.error(unknownError)
		}
	}

	return (
		<div>
			{oauthProviders.map((provider) => {
				const Icon = Icons[provider.icon]

				return (
					<Button
						aria-label={`Sign in with ${provider.name}`}
						key={provider.strategy}
						variant="outline"
						className="w-full bg-background sm:w-auto"
						onClick={() => oauthSignIn(provider.strategy)}
						disable={isLoading !== null}
					>
						{isLoading === provider.strategy ? (
							<Icons.spinner
								className="mr-2 h-4 w-4 animate-spin"
								aria-hidden="true"
							/>
						) : (
							<Icon className="mr-2 h-4 w-4" aria-hidden="true" />
						)}
						{provider.name}
					</Button>
				)
			})}
		</div>
	)
}