import { Layout } from '@/components/Layout'
import { useSession } from 'next-auth/react'

export default function Home() {
	const { data: session } = useSession()

	return (
		<Layout>
			<div className="text-black flex justify-between">
				<h2>
					Hello, <b>{session?.user?.name}</b>
				</h2>

				<div className="flex rounded-full overflow-hidden">
					<img src={session?.user?.image} alt="avatar" className="w-10 h-10" />
				</div>
			</div>
		</Layout>
	)
}
