import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Copy, Server } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from './ui/button'

const textMap = {
	public: 'Public',
	admin: 'Admin',
}

const variantMap = {
	public: 'secondary',
	admin: 'destructive',
}

export const ApiAlert = ({ title, description, variant = 'public' }) => {
	// Function to copy to clipboard
	const onCopy = (description) => {
		navigator.clipboard.writeText(description)
		toast.success('API Route copied to clipboard.')
	}

	return (
		<Alert>
			<Server className="h-4 w-4" />
			<AlertTitle className="flex itens-center gap-x-2">
				{title}
				<Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
			</AlertTitle>

			<AlertDescription className="mt-4 flex items-center justify-between">
				<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
					{description}
				</code>
				<Button variant="outline" size="sm" onClick={() => onCopy(description)}>
					<Copy className="h-4 w-4" />
				</Button>
			</AlertDescription>
		</Alert>
	)
}
