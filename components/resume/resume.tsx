import Link from 'next/link';
import { motion } from 'framer-motion';

const activity = [
	{
		id: 5,
		type: 'job',

		job: { name: 'Hootsuite', title: 'Intermediate Software Developer' },
		imageUrl: '/hootsuite_logo.jpg',
		comment: [],
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
	{
		id: 2,
		type: 'job',
		job: { name: 'Kellen Wiltshire Web Development', title: 'Fullstack Web Developer' },
		imageUrl: '/favicon.ico',
		comment: [
			'Developed and launched responsive, high-performance websites using React, NextJS, Typescript, and HTML/CSS to meet client requirements.',
			'Created interactive and user-friendly UI components with TailwindCSS and Emotion Style Components.',
			'Developed secure, scalable backend services with Node.js, ExpressJS, and PostgreSQL.',
			'Built e-commerce solutions using Shopify and SquareUp API for merchant store setups and payment processing.',
			'Led full-stack application projects, implementing best practices in continuous delivery environments.',
		],
		date: 'January 2021 - August 2022',
	},

	{
		id: 1,
		type: 'job',
		job: { name: 'Legal Aid Ontario', title: 'Legal Aid Worker' },
		imageUrl: 'LegalAidLogo.jpg',
		comment: [
			'Triaged and assessed the needs of the Clients in order to determine the most appropriate service.',
			'Completed certificate applications by determining eligibility for services by telephone, in court, or in federal or provincial institutions.',
			'Identified vulnerable clients and ensured appropriate services and referrals can be made.',
			'Improved client satisfaction by referring clients to other government services as needed.',
			'Provided training to new staff on Legal Aid policies and procedures (including PeopleSoft ERP).',
		],
		date: 'June 2014 - August 2022',
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
					href='/Kellen Wiltshire - Resume - 2024.pdf'
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
