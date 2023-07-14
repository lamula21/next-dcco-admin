import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'

export const PreviousButton = () => {
	const router = useRouter()

	return (
		<Button
			onClick={() => router.back()}
			variant="ghost"
			className="flex items-center justify-center px-4 h-10 w-10 text-2xl hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
		>
			<i className="bx bx-arrow-back"></i>
		</Button>
	)
}
