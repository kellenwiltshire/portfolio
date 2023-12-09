import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { useEffect, useState } from 'react';

function handleExitComplete() {
	if (typeof window !== 'undefined') {
		window.scrollTo({ top: 0 });
	}
}

function MyApp({ Component, pageProps }: AppProps) {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		const html = document.querySelector('#topDiv');
		isDarkMode ? html?.classList.add('dark') : html?.classList.remove('dark');
	}, [isDarkMode]);
	return (
		<div id='topDiv' className='font-ubuntu'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
			</Head>
			<AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
				<Component {...pageProps} key={router.route} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
			</AnimatePresence>
		</div>
	);
}

export default MyApp;
