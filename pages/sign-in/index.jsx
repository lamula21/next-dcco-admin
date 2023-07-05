import AuthLayout from '@/components/AuthLayout'
import { SignIn } from '@clerk/nextjs'
import SignCard from '@components/SignCard'

export default function SignInPage() {
	return (
		<AuthLayout>
			<SignCard signOption="signIn" />
		</AuthLayout>
	)
}
