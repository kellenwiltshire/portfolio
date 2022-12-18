import Link from 'next/link';
import { Fragment } from 'react';
import { motion } from 'framer-motion';

const activity = [
	{
		id: 1,
		type: 'job',

		job: { name: 'Superna', title: 'Junior Developer' },
		imageUrl:
			'https://media-exp1.licdn.com/dms/image/D4E0BAQFIHmnDTCBu2g/company-logo_200_200/0/1667088833137?e=1677715200&v=beta&t=u83-xJYyuTxwAN2mhjwfOmt1p_abVJf_gmHdYR3Xr-s',
		comment: [
			"Develop User Interface (UI) components for Superna's products to perfectly match the design",
			'Implemented Redux and Redux-Toolkit to manage product State across the platform',
			"Research new developments in software trends to stay current with the industry and apply those learnings to Superna's software products where necessary",
			'Implemented Jest and Playwright testing to ensure that the platform functions without issue',
			'Identify any risks of shortcomings in the software, and raise bugs or otherwise report these issues as appropriate',
			'Implemented Storybook to streamline UI development, testing, and documentation',
		],
		date: 'August 2022 - Present',
	},

	{
		id: 2,
		type: 'job',
		job: { name: 'Legal Aid Ontario', title: 'Legal Aid Worker' },
		imageUrl:
			'https://media-exp1.licdn.com/dms/image/C4E0BAQEzGQXLJgeIdQ/company-logo_200_200/0/1519855919226?e=1677715200&v=beta&t=rLp8yvgna9DqONpNCtltFOa-SqPJtzawxdReqnChx3A',
		comment: [
			'Triage and asses the needs of the clientele in order to determine the most appropriate service',
			'Complete certificate applications by determining eligibility for services by telephone, in court, or in federal or provincial institutions',
			'Make referrals as necessary to other government services in order to ensure the client is satisfied',
			'Prepare correspondence for clients, lawyers, and police',
			'Assist with training of new staff to ensure a productive work environment',
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
