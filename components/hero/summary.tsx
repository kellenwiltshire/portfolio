import { motion } from 'framer-motion';

const Summary = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='w-full flex flex-col items-center justify-center bg-white dark:bg-black'
		>
			<div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8'>
				<div className='w-full flex justify-center mb-6'>
					<h2 className='font-semibold text-3xl text-black dark:text-white'>Summary</h2>
				</div>
				<p className='text-center text-black dark:text-white'>
					Software Developer with 5+ years of experience leading frontend architecture and delivering performant,
					scalable applications in SaaS environments. Adept at cross-functional collaboration, mentoring developers, and
					driving modernization across React and TypeScript ecosystems.
				</p>
			</div>
		</motion.div>
	);
};

export default Summary;
