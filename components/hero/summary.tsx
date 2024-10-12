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
					A dedicated Software Developer with extensive experience in building scalable, high-performance web
					applications and cloud-based services. Expert in front-end development with expertise in ReactJS, TailwindCSS,
					and Typescript, alongside strong backend capabilities with Node.js, Java, and AWS services. Skilled at
					collaborating cross-functionally and mentoring team members, with a track record of delivering exceptional
					user experiences through well-designed, maintainable, and testable code.
				</p>
			</div>
		</motion.div>
	);
};

export default Summary;
