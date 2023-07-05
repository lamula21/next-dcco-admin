import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'sonner'

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<ClerkProvider>
			<Component {...pageProps} />
			<Toaster expand={false} position="top-center" richColors />
		</ClerkProvider>
	)
}
