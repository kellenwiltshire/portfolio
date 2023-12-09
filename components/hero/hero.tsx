import Toggle from 'components/toggle/dark-mode-toggle';
import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';

const Hero = ({
	isDarkMode,
	setIsDarkMode,
}: {
	isDarkMode: boolean;
	setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='relative px-6 lg:px-8 bg-white dark:bg-black'
		>
			<div className='w-full flex justify-end p-2'>
				<Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
			</div>
			<div className='mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40'>
				<div>
					<div>
						<h1 className='text-4xl font-bold tracking-tight text-center sm:text-6xl text-black dark:text-white'>
							Kellen Wiltshire
						</h1>
						<p className='mt-6 text-lg leading-8 text-gray-600 text-center'>Software Developer I at Superna</p>
						<div className='mt-8 flex gap-x-4 justify-center'>
							<a
								href='mailto:kellenwiltshire@outlook.com'
								className='inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700'
							>
								Contact Me
							</a>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;
