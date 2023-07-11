import { Layout } from '@/components/Layout'
import { Separator } from '@/components/ui/separator'
import Heading from '@/components/Heading'
import { ProductForm } from '@/components/ProductForm'

export default function NewProduct() {
	return (
		<Layout>
			<Heading title="Create Product" description="Add new product" />
			<Separator className="mt-4" />
			<ProductForm />
		</Layout>
	)
}
