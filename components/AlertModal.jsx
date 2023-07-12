import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from './ui/button'

export const AlertModal = ({
	title,
	description,
	isOpen,
	onClose,
	onConfirm,
	loading,
}) => {
	// When modal is closed, set prop open=false, call onOpenChange
	// => if open=false, close Modal by setting open state to false
	const onChange = (open) => {
		if (!open) {
			onClose()
		}
	}

	return (
		<>
			<Dialog open={isOpen} onOpenChange={onChange}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
						<DialogDescription>{description}</DialogDescription>
					</DialogHeader>
					<div className="pt-6 flex gap-2 items-center justify-end w-full">
						<Button disabled={loading} variant="outline" onClick={onClose}>
							Cancel
						</Button>
						<Button
							disabled={loading}
							variant="destructive"
							onClick={onConfirm}
						>
							Delete
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}
