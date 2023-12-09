import GithubIcon from 'components/logos/github-icon';
import LinkIcon from 'components/logos/link-icon';
import Image from 'next/image';

const websites = [
	{
		name: 'Rate The Landlord',
		role: 'Co-Founder / Lead Developer',
		imageUrl: '/rtl.webp',
		bio: 'Rate the Landlord was created as a tool for tenants to stay informed about housing the same way we stay informed about every other business, through crowd-sourced reviews.',
		websiteUrl: 'https://ratethelandlord.org/',
		githubUrl: 'https://github.com/RateTheLandlord',
	},
	{
		name: 'Women On Par',
		role: 'Developer',
		imageUrl: '/wop.webp',
		bio: 'Women On Par is a website for a golf league that allows users to enter their scores and admins to track attendance, generate tee times, and post news.',
		websiteUrl: null,
		githubUrl: 'https://github.com/kellenwiltshire/womenonpar-ui',
	},
	{
		name: 'YGK Boxing',
		role: 'Developer',
		imageUrl: '/ygk.webp',
		bio: 'Simple website created for a local Boxing club.',
		websiteUrl: 'https://www.ygkboxing.com/',
		githubUrl: 'https://github.com/kellenwiltshire/ygk-boxing',
	},
];

export default function MyProjects() {
	return (
		<div className='bg-white py-24 md:py-32'>
			<div className='mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5'>
				<div className='max-w-2xl xl:col-span-2'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Projects</h2>
					<p className='mt-6 text-lg leading-8 text-gray-600'>A small sample of some of my personal projects</p>
				</div>
				<ul role='list' className='-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3'>
					{websites.map((website) => (
						<li key={website.name} className='flex flex-col gap-10 pt-12 sm:flex-row'>
							<Image
								className='aspect- w-52 flex-none rounded-2xl object-cover'
								src={website.imageUrl}
								alt=''
								width={208}
								height={208}
							/>
							<div className='max-w-xl flex-auto'>
								<h3 className='text-lg font-semibold leading-8 tracking-tight text-gray-900'>{website.name}</h3>
								<p className='text-base leading-7 text-gray-600'>{website.role}</p>
								<p className='mt-6 text-base leading-7 text-gray-600'>{website.bio}</p>
								<ul role='list' className='mt-6 flex gap-x-6'>
									{website.websiteUrl != null && (
										<li>
											<a href={website.websiteUrl} className='text-gray-400 hover:text-gray-500'>
												<span className='sr-only'>Website</span>
												<LinkIcon />
											</a>
										</li>
									)}
									<li>
										<a href={website.githubUrl} className='text-gray-400 hover:text-gray-500'>
											<span className='sr-only'>Github</span>
											<GithubIcon className='h-5 w-5' />
										</a>
									</li>
								</ul>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
