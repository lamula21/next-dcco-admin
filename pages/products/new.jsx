import { Layout } from '@/components/Layout'
import { Separator } from '@/components/ui/separator'
import Heading from '@/components/Heading'
import { ProductForm } from '@/components/ProductForm'
import { PreviousButton } from '@/components/ui/previous'
import { useRouter } from 'next/router'

export default function NewProduct() {
	return (
		<Layout>
			<PreviousButton />
			<Heading title="Create Product" description="Add new product" />
			<Separator className="mt-4" />
			<ProductForm />
		</Layout>
	)
}
