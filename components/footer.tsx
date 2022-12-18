import EmailIcon from './logos/email-icon';
import GithubIcon from './logos/github-icon';
import LinkedInIcon from './logos/linkedin-icon';

const navigation = [
	{
		name: 'GitHub',
		href: 'https://github.com/kellenwiltshire',
		icon: <GithubIcon className='h-6 w-6' aria-hidden='true' />,
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/kellenwiltshire/',
		icon: <LinkedInIcon className='h-6 w-6' aria-hidden='true' />,
	},
	{
		name: 'Email',
		href: 'mailto:kellenwiltshire@outlook.com',
		icon: <EmailIcon className='h-6 w-6' aria-hidden='true' />,
	},
];

const Footer = () => {
	return (
		<footer className='bg-white dark:bg-black text-black dark:text-white'>
			<div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
				<div className='flex justify-center space-x-6 md:order-2'>
					{navigation.map((item) => (
						<a key={item.name} href={item.href} className='text-gray-400 hover:text-gray-500'>
							<span className='sr-only'>{item.name}</span>
							{item.icon}
						</a>
					))}
				</div>
				<div className='mt-8 md:order-1 md:mt-0'>
					<p className='text-center text-base text-gray-400'>&copy; 2022 Kellen Wiltshire. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
