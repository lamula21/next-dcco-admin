import Heading from '@/components/Heading'
import { Layout } from '@/components/Layout'
import { Separator } from '@/components/ui/separator'
import { useUser } from '@clerk/nextjs'

export default function HomePage() {
	// get user authenticated from clerk
	const { user, isSignedIn, isLoaded } = useUser()

	if (!isLoaded) {
		return null
	}

	if (isSignedIn) {
		return (
			<Layout>
				<div className="flex items-center justify-between">
					<Heading
						title="Dashboard"
						description={`Welcome ${user.fullName} to DCCOA Dashboard`}
					/>
				</div>
				<Separator />
			</Layout>
		)
	}
}
