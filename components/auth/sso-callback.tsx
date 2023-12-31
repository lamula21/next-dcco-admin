'use client'

import * as React from 'react'
import { useClerk } from '@clerk/nextjs'

import { Icons } from '../Icons/icons'
import { type SSOCallbackPageProps } from '@/pages/sso-callback/index'

export default function SSOCallback({ searchParams }: SSOCallbackPageProps) {
	const { handleRedirectCallback } = useClerk()

	React.useEffect(() => {
		handleRedirectCallback(searchParams)
	}, [searchParams, handleRedirectCallback])

	return (
		<div
			role="status"
			aria-label="Loading"
			aria-describedby="loading-description"
			className="flex items-center justify-center h-full"
		>
			<Icons.spinner className="h-32 w-32 animate-spin" aria-hidden="true" />
		</div>
	)
}
