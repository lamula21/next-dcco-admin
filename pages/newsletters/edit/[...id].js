// /newsletters/edit/[...id].js  <=>  https:localhost:3000/newsletters/edit/:id
import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { NewsletterForm } from '@/components/forms/newsletter-form'
import Heading from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { PreviousButton } from '@/components/ui/previous'


export default function EditNewsletterPage() {
	const router = useRouter()
	const { id } = router.query // retrieve id from url
	const [newsletterInfo, setNewsletterInfo] = useState(null)

	useEffect(() => {
		if (id) {
			axios.get('/api/newsletters?id=' + id).then((response) => {
				setNewsletterInfo(response.data)
			})
		}
	}, [id])

	// Note: ...newsletterInfo (spread operator) passes individual props to the component
	return (
		<Layout>
			<PreviousButton />
			<Heading title='Edit newsletter' description='Edit a newsletter' />
			<Separator className='mt-4' />
			{newsletterInfo && <NewsletterForm initialData={newsletterInfo}></NewsletterForm>}
		</Layout>
	)
}
