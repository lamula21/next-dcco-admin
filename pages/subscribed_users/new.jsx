import { Layout } from '@/components/Layout'
import { Separator } from '@/components/ui/separator'
import Heading from '@/components/Heading'
import { SubscribedUserForm } from '@/components/forms/subscribed_user_form'
import { PreviousButton } from '@/components/ui/previous'

export default function NewSubscribedUer() {
	return (
		<Layout>
			<PreviousButton />
			<Heading title="Create Subscribed User" description="Add new subscribed user" />
			<Separator className="mt-4" />
			<SubscribedUserForm />
		</Layout>
	)
}
