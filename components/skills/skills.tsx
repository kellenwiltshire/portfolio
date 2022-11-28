import DockerIcon from 'components/logos/docker-icon';
import JavascriptIcon from 'components/logos/javascript-icon';
import JestIcon from 'components/logos/jest-icon';
import NextIcon from 'components/logos/next-icon';
import ReactIcon from 'components/logos/react-icon';
import ReduxIcon from 'components/logos/redux-icon';
import StrapiIcon from 'components/logos/strapi-icon';
import StorybookIcon from 'components/logos/storybook-icon';
import TailwindIcon from 'components/logos/tailwind-icon';
import TypescriptIcon from 'components/logos/typescript-icon';
import JiraIcon from 'components/logos/jira-icon';
import { useState } from 'react';

const skillIcons = [
	{
		name: 'Docker',
		icon: <DockerIcon height='100' width='100' />,
	},
	{
		name: 'Javascript',
		icon: <JavascriptIcon height='100' width='100' />,
	},
	{
		name: 'Jest',
		icon: <JestIcon height='100' width='100' />,
	},
	{
		name: 'NextJS',
		icon: <NextIcon height='100' width='100' />,
	},
	{
		name: 'ReactJS',
		icon: <ReactIcon height='100' width='100' />,
	},
	{
		name: 'Redux',
		icon: <ReduxIcon height='100' width='100' />,
	},
	{
		name: 'Strapi',
		icon: <StrapiIcon height='100' width='100' />,
	},
	{
		name: 'Storybook',
		icon: <StorybookIcon height='100' width='100' />,
	},
	{
		name: 'TailwindCSS',
		icon: <TailwindIcon height='100' width='100' />,
	},
	{
		name: 'Typescript',
		icon: <TypescriptIcon height='100' width='100' />,
	},
	{
		name: 'Jira',
		icon: <JiraIcon height='100' width='100' />,
	},
];

const Skills = () => {
	const [activeSkill, setActiveSkill] = useState('');
	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
				<p className='text-center text-lg font-semibold text-gray-600'>Skills</p>
				<div className='mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8'>
					{skillIcons.map((skill) => {
						return (
							<div
								key={skill.name}
								className='col-span-1 flex justify-center bg-gray-50 py-8 px-8 align-middle flex-wrap h-52'
								onMouseEnter={() => setActiveSkill(skill.name)}
								onMouseLeave={() => setActiveSkill('')}
							>
								<p className='w-full flex justify-center'>{skill.icon}</p>
								{activeSkill === skill.name ? <p className='w-full flex justify-center'>{skill.name}</p> : null}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Skills;
