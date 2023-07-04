'use client'

import { useClerk } from '@clerk/nextjs'
import { useEffect } from 'react'

import { Icons } from '../Icons/icons'

export default function SSOCallback({ searchParams }) {
	const { handleRedirectCallback } = useClerk()

	useEffect(() => {
		handleRedirectCallback(searchParams)
	}, [searchParams, handleRedirectCallback])

	return (
		<div
			role="status"
			aria-label="Loading"
			aria-describedby="loading-description"
			className="flex items-center justify-center"
		>
			<Icons.spinner className="h-16 w-16 animate-spin" aria-hidden="true" />
		</div>
	)
}
