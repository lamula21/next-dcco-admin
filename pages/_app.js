import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'sonner'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<ClerkProvider>
			<main className={'h-full ' + inter.className}>
				<Component {...pageProps} />
				<Toaster expand={false} position="top-center" richColors />
			</main>
		</ClerkProvider>
	)
}
