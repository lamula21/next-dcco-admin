import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Copy, Edit, MoreHorizontal, Trash } from 'lucide-react'
import { toast } from 'sonner'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { AlertModal } from '@/components/AlertModal'

export const CellAction = ({ data, route }) => {
	const router = useRouter() // manipulate url and navigation

	const [loading, SetLoading] = useState(false)
	const [open, SetOpen] = useState(false)

	// Function to copy from clipboard
	const onCopy = (id) => {
		navigator.clipboard.writeText(id)
		toast.success('ID copied to the clipboard.')
	}

	// Function to delete
	const onDelete = async () => {
		try {
			SetLoading(true)
			await axios.delete(`/api/${route}?id=` + data.id)
			toast.success('Deleted succesfully.')
			router.push(`/${route}`)
		} catch (error) {
			toast.error('Something went wrong.')
		} finally {
			SetLoading(false)
			SetOpen(false)

			setTimeout(() => {
				router.refresh()
			}, 1000)
		}
	}

	return (
		<>
			<AlertModal
				title="Danger Zone"
				description="This action cannot be undone. This will permanently delete it from our servers."
				isOpen={open}
				onClose={() => SetOpen(false)}
				onConfirm={onDelete}
				loading={loading}
			/>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="h-8 w-8 p-0">
						<span className="sr-only"></span>
						<MoreHorizontal className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent>
					<DropdownMenuLabel>Actions</DropdownMenuLabel>

					<DropdownMenuItem onClick={() => onCopy(data.id)}>
						<Copy className="mr-2 h-4 w-4" />
						Copy Id
					</DropdownMenuItem>

					<DropdownMenuItem
						onClick={() => router.push(`/${route}/edit/${data.id}`)}
					>
						<Edit className="mr-2 h-4 w-4" />
						Update
					</DropdownMenuItem>

					<DropdownMenuItem onClick={() => SetOpen(true)}>
						<Trash className="mr-2 h-4 w-4" />
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}
