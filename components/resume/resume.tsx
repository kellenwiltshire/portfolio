import Link from 'next/link';
import { motion } from 'framer-motion';

const activity = [
	{
		id: 5,
		type: 'job',

		job: { name: 'Hootsuite', title: 'Software Developer' },
		imageUrl: '/hootsuite_logo.jpg',
		comment: [
			'Refactored core React components and modernized frontend architecture, improving maintainability and mobile responsiveness across authentication and homepage flows.',
			'Delivered production-ready features and optimizations across frontend, backend, and DevOps layers within a large-scale SaaS platform.',
			'Collaborated cross-functionally with QA and design teams to improve onboarding completion rates and minimize regressions during rapid feature development.',
			'Enhanced observability through expanded backend logging and standardized response handling in shared libraries.',
			'Authored technical “spikes” to evaluate and introduce architectural improvements, demonstrating initiative in long-term system scalability.',
		],
		date: 'January 2025 - Present',
	},
	{
		id: 4,
		type: 'job',

		job: { name: 'Superna', title: 'Software Developer II' },
		imageUrl: '/SupernaLogo.jpg',
		comment: [
			'Develop high-performance, scalable front-end components with ReactJS and TailwindCSS, ensuring seamless integration with design specifications.',
			'Conduct code reviews, write comprehensive unit tests, and promote best coding practices.',
			'Identify and mitigate potential software risks, bugs, and security issues during development.',
			'Write and maintain technical documentation to support internal teams.',
			'Manage cloud infrastructure by creating Ansible playbooks and Terraform modules for AWS deployments, ensuring efficiency and scalability.',
			'Orchestrate Docker containers in a Kubernetes environment using custom Helm charts for reliable multi-environment deployments.',
			'Mentor developers and onboard new team members in development practices.',
			'Maintain Java-based backend services, improving performance and scalability.',
		],
		date: 'January 2024 - January 2025',
	},
	{
		id: 3,
		type: 'job',

		job: { name: 'Superna', title: 'Software Developer I' },
		imageUrl: '/SupernaLogo.jpg',
		comment: [
			'Collaborated with UX/UI designers and QA teams to ensure the seamless implementation of new designs and features.',
			'Integrated Redux Toolkit to enhance state management across applications.',
			'Implemented Jest and Playwright for testing, improving test coverage and ensuring reliability.',
			'Utilized StorybookJS to streamline UI component development and documentation.',
		],
		date: 'August 2022 - January 2024',
	},
];

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='w-full flex flex-row flex-wrap justify-center bg-white dark:bg-black text-black dark:text-white px-4 md:px-0'
		>
			<div className='w-full flex justify-center mb-6'>
				<h2 className='font-semibold text-3xl '>My Experience</h2>
			</div>
			<ul role='list' className='-mb-8'>
				{activity.map((activityItem, activityItemIdx) => (
					<li key={activityItem.id}>
						<div className='relative pb-8'>
							{activityItemIdx !== activity.length - 1 ? (
								<span className='absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200' aria-hidden='true' />
							) : null}
							<div className='relative flex items-start space-x-3'>
								<>
									<div className='relative'>
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white dark:ring-black'
											src={activityItem.imageUrl}
											alt=''
										/>
									</div>
									<div className='min-w-0 flex-1'>
										<div>
											<div>
												<p className='font-medium text-base'>{activityItem.job.name}</p>
												<p className='font-small text-small'>{activityItem.job.title}</p>
											</div>
											<p className='mt-0.5 text-sm text-gray-500'>{activityItem.date}</p>
										</div>
										<div className='mt-2 text-sm'>
											<ul className='list-disc'>
												{activityItem.comment.map((com, i) => {
													return <li key={i}>{com}</li>;
												})}
											</ul>
										</div>
									</div>
								</>
							</div>
						</div>
					</li>
				))}
			</ul>
			<div className='w-full flex flex-row items-center gap-2 justify-center mt-4'>
				<Link
					className='inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 ring-1 ring-gray-900 dark:ring-gray-400 hover:ring-gray-900 dark:hover:ring-gray-200'
					href='/Kellen Wiltshire Resume 2025.pdf'
				>
					Download Resume
				</Link>
				<Link
					className='inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 ring-1 ring-gray-900 dark:ring-gray-400 hover:ring-gray-900 dark:hover:ring-gray-200'
					href='https://linkedin.com/in/kellenwiltshire'
				>
					LinkedIn
				</Link>
			</div>
		</motion.div>
	);
};

export default Resume;
