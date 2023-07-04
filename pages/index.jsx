import { Layout } from '@/components/Layout'
import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<Layout>
			<div className="text-black flex justify-between">
				<h2>
					Hello, <b>User</b>
				</h2>

				<div className="flex rounded-full overflow-hidden">
					{/* <img alt="avatar" className="w-10 h-10" /> */}
				</div>
			</div>
		</Layout>
	)
}
