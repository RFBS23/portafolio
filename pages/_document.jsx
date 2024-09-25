// Default core packages
import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';
/**
 * Load custom scripts in <Head>
 * 
 * @returns <Html>
 */
export default function Document() {
	return (
		<Html lang="es">
			<Head>
				<title>Portafolio FabriDev</title>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.ico"/>
				<link rel="manifest" href="/favicon/site.webmanifest"/>
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
				<meta name="msapplication-TileColor" content="#da532c"/>
				<meta name="theme-color" content="#ffffff"/>
			</Head>
			<body>
			<Main/>
			<NextScript />
			<Analytics />
			</body>
		</Html>
	)
}