import { Layout } from '@/components/Layout'
import { Separator } from '@/components/ui/separator'
import Heading from '@/components/Heading'
import { NewsletterForm } from '@/components/forms/newsletter-form'
import { PreviousButton } from '@/components/ui/previous'
import { useRouter } from 'next/router'

export default function NewNewsletter() {
	return (
		<Layout>
			<PreviousButton />
			<Heading title='Create Newsletter' description='Add new newsletter' />
			<Separator className='mt-4' />
			<NewsletterForm />
		</Layout>
	)
}
