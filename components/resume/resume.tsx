import Link from 'next/link';
import { Fragment } from 'react';
import { motion } from 'framer-motion';

const activity = [
	{
		id: 1,
		type: 'job',

		job: { name: 'Superna', title: 'Junior Developer' },
		imageUrl:
			'/SupernaLogo.jpg',
		comment: [
			"Develop high quality User Interface (UI) components for Superna's products to perfectly match the design.",
			'Implement Redux and Redux-Toolkit to manage product state across the platform.',
			'Design, develop, test, deploy and maintain high quality software systems.',
			'Perform code reviews and write unit testing.',
			'Implement new designs from the design team',
			'Develop and maintain excellent working relationships with various stakeholders including UX/UI designers and QA.',
			'Research software development trends to stay current and apply those where necessary.',
			'Implement Jest and Playwright testing to ensure that the platform functions without issue.',
			'Identify any risks of shortcomings or bugs in the software',
			'Implement Storybook to streamline UI development, testing, and documentation.',
			'Write and update technical documentation.',
		],
		date: 'August 2022 - Present',
	},
	{
		id: 3,
		type: 'job',
		job: { name: 'Kellen Wiltshire Web Development', title: 'Fullstack Web Developer' },
		imageUrl: '/favicon.ico',
		comment: [
			'Built functional and responsive websites with the latest technologies such as React, NextJS, Typescript, and traditional HTML/CSS to meet Client expectations for performance.',
			'Created beautiful and easy to use UI to bring the Clients vision to life using TailwindCSS, Emotion Style Components, StorybookJS, and CSS.',
			'Created secure Backend services and databases using Node, ExpressJS, PostgreSQL, and Strapi.',
			'Experienced working with Shopify and Squareup API to create merchant stores and process payments.',
			'Experienced in building scalable web applications using best practices in a continuous delivery environment.',
		],
		date: 'January 2021 - August 2022',
	},

	{
		id: 3,
		type: 'job',
		job: { name: 'Legal Aid Ontario', title: 'Legal Aid Worker' },
		imageUrl:
			'LegalAidLogo.jpg',
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
					href='/Kellen Wiltshire Resume.pdf'
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