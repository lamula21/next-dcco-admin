import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="stylesheet"
					href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
				/>
				<link rel="icon" href="/dccoa-logo.jpeg" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
