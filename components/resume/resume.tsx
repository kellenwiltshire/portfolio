import { Fragment } from 'react';

const activity = [
	{
		id: 1,
		type: 'comment',

		person: { name: 'Superna', href: '#' },
		imageUrl:
			'https://media-exp1.licdn.com/dms/image/D4E0BAQFIHmnDTCBu2g/company-logo_200_200/0/1667088833137?e=1677715200&v=beta&t=u83-xJYyuTxwAN2mhjwfOmt1p_abVJf_gmHdYR3Xr-s',
		comment: [
			"Develop User Interface (UI) components for Superna's products to perfectly match the design",
			'Implemented Redux and Redux-Toolkit to manage product State across the platform',
			"Research new developments in software development trends, to stay current with the industry and apply those learnings to Superna's software products where necessary",
			'Implemented Jest and Playwright testing to ensure that the platform functions without issue',
			'Identify any risks of shortcomings in the software, and raise bugs or otherwise report these issues as appropriate',
			'Implemented Storybook to streamline UI development, testing, and documentation',
		],
		date: 'August 2022 - Present',
	},

	{
		id: 2,
		type: 'comment',
		person: { name: 'Legal Aid Ontario', href: '#' },
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

// function classNames(...classes) {
// 	return classes.filter(Boolean).join(' ');
// }

const Resume = () => {
	return (
		<div className='w-full flex justify-center'>
			<ul role='list' className='-mb-8'>
				{activity.map((activityItem, activityItemIdx) => (
					<li key={activityItem.id}>
						<div className='relative pb-8'>
							{activityItemIdx !== activity.length - 1 ? (
								<span className='absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200' aria-hidden='true' />
							) : null}
							<div className='relative flex items-start space-x-3'>
								{activityItem.type === 'comment' ? (
									<>
										<div className='relative'>
											{/* eslint-disable-next-line @next/next/no-img-element */}
											<img
												className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white'
												src={activityItem.imageUrl}
												alt=''
											/>
										</div>
										<div className='min-w-0 flex-1'>
											<div>
												<div className='text-sm'>
													<a href={activityItem.person.href} className='font-medium text-gray-900'>
														{activityItem.person.name}
													</a>
												</div>
												<p className='mt-0.5 text-sm text-gray-500'>{activityItem.date}</p>
											</div>
											<div className='mt-2 text-sm text-gray-700'>
												<ul>
													{activityItem.comment.map((com, i) => {
														return <li key={i}>{com}</li>;
													})}
												</ul>
											</div>
										</div>
									</>
								) : activityItem.type === 'assignment' ? (
									<>
										<div>
											<div className='relative px-1'>
												<div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white'></div>
											</div>
										</div>
										<div className='min-w-0 flex-1 py-1.5'>
											<div className='text-sm text-gray-500'>
												<a href={activityItem.person.href} className='font-medium text-gray-900'>
													{activityItem.person.name}
												</a>{' '}
												assigned <span className='whitespace-nowrap'>{activityItem.date}</span>
											</div>
										</div>
									</>
								) : activityItem.type === 'tags' ? (
									<>
										<div>
											<div className='relative px-1'>
												<div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white'></div>
											</div>
										</div>
										<div className='min-w-0 flex-1 py-0'>
											<div className='text-sm leading-8 text-gray-500'>
												<span className='mr-0.5'>
													<a href={activityItem.person.href} className='font-medium text-gray-900'>
														{activityItem.person.name}
													</a>{' '}
													added tags
												</span>{' '}
												<span className='mr-0.5'></span>
												<span className='whitespace-nowrap'>{activityItem.date}</span>
											</div>
										</div>
									</>
								) : null}
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Resume;
