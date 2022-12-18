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
import GithubActions from 'components/logos/github-actions';
import GitIcon from 'components/logos/Git-icon';

import { motion } from 'framer-motion';

const skillIcons = [
	{
		name: 'Docker',
		icon: <DockerIcon height='75' width='75' />,
	},
	{
		name: 'Javascript',
		icon: <JavascriptIcon height='75' width='75' />,
	},
	{
		name: 'Jest',
		icon: <JestIcon height='75' width='75' />,
	},
	{
		name: 'NextJS',
		icon: <NextIcon height='75' width='75' />,
	},
	{
		name: 'ReactJS',
		icon: <ReactIcon height='75' width='75' />,
	},
	{
		name: 'Redux',
		icon: <ReduxIcon height='75' width='75' />,
	},
	{
		name: 'Strapi',
		icon: <StrapiIcon height='75' width='75' />,
	},
	{
		name: 'Storybook',
		icon: <StorybookIcon height='75' width='75' />,
	},
	{
		name: 'TailwindCSS',
		icon: <TailwindIcon height='75' width='75' />,
	},
	{
		name: 'Typescript',
		icon: <TypescriptIcon height='75' width='75' />,
	},
	{
		name: 'Jira',
		icon: <JiraIcon height='75' width='75' />,
	},
	{
		name: 'Github Actions',
		icon: <GithubActions height='75' width='75' />,
	},
	{
		name: 'Git',
		icon: <GitIcon height='75' width='75' />,
	},
];

const Skills = () => {
	const [activeSkill, setActiveSkill] = useState<string>('');
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='bg-white dark:bg-black text-black dark:text-white'
		>
			<div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8'>
				<div className='w-full flex justify-center mb-6'>
					<h2 className='font-semibold text-3xl'>Some of My Skills</h2>
				</div>
				<div className='grid grid-cols-2 gap-4 md:grid-cols-6 lg:grid-cols-5'>
					{skillIcons.map((skill) => {
						return (
							<div
								key={skill.name}
								className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1 h-48 flex-row flex-wrap'
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
		</motion.div>
	);
};

export default Skills;
