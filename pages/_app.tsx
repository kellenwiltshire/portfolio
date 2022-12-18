import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { useEffect, useState } from 'react';
import * as gtag from '../lib/gtag';

function handleExitComplete() {
	if (typeof window !== 'undefined') {
		window.scrollTo({ top: 0 });
	}
}

function MyApp({ Component, pageProps }: AppProps) {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	useEffect(() => {
		const html = document.querySelector('#topDiv');
		isDarkMode ? html?.classList.add('dark') : html?.classList.remove('dark');
	}, [isDarkMode]);
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
				/>
				<meta name='description' content='Description' />
				<meta name='keywords' content='Keywords' />
				<title>Next.js PWA Example</title>

				<link rel='manifest' href='/manifest.json' />
				<link href='/icons/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
				<link href='/icons/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
				<link rel='apple-touch-icon' href='/apple-icon.png'></link>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<meta name='theme-color' content='#317EFB' />
			</Head>
			<AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
				<Component {...pageProps} key={router.route} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
			</AnimatePresence>
			;
		</>
	);
}

export default MyApp;
