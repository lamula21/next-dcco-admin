import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'sonner'
import { Inter } from 'next/font/google'
import NextNProgress from 'nextjs-progressbar'

const inter = Inter({ subsets: ['latin'] })

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<ClerkProvider>
			<main className={'h-full ' + inter.className}>
				<NextNProgress color="#000" height={5} />
				<Component {...pageProps} />
				<Toaster expand={false} position="top-center" richColors />
			</main>
		</ClerkProvider>
	)
}
