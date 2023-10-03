// /subscribed_users/edit/[...id].js  <=>  https:localhost:3000/subscribed_users/edit/:id
import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { SubscribedUserForm } from '@/components/forms/subscribed_user_form'
import Heading from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { PreviousButton } from '@/components/ui/previous'

export default function EditSubscribedUserPage() {
	const router = useRouter()
	const { id } = router.query // retrieve id from url
	const [subscribed_userInfo, setSubscribedUserInfo] = useState(null)

	useEffect(() => {
		if (id) {
			axios.get('/api/subscribed_users?id=' + id).then((response) => {
				setSubscribedUserInfo(response.data)
			})
		}
	}, [id])

	// Note: ...subscribed_userInfo (spread operator) passes individual props to the component
	return (
		<Layout>
			<PreviousButton />
			<Heading title="Edit subscribed_user" description="Edit a subscribed_user" />
			<Separator className="mt-4" />
			{subscribed_userInfo && (
				<SubscribedUserForm initialData={subscribed_userInfo}></SubscribedUserForm>
			)}
		</Layout>
	)
}
