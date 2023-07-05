import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { VerifyEmailForm } from '@/components/forms/verify-email-form'

export default function VerifyEmailPage() {
	return (
		<div className="flex items-center justify-center h-full">
			<Card>
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">Verify email</CardTitle>
					<CardDescription>
						Verify your email address to complete your account creation
					</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<VerifyEmailForm />
				</CardContent>
			</Card>
		</div>
	)
}
