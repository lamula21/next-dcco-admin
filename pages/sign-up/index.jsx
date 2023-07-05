import AuthLayout from '@/components/AuthLayout'
import SignCard from '@components/SignCard'

export default function SignUpPage() {
	return (
		<AuthLayout>
			<SignCard signOption="signUp" />
		</AuthLayout>
	)
}
