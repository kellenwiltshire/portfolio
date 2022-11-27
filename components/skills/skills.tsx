import ReactIcon from 'components/logos/react-icon';
import ReduxIcon from 'components/logos/redux-icon';

const Skills = () => {
	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
				<p className='text-center text-lg font-semibold text-gray-600'>Skills</p>
				<div className='mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8'>
					<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
						<ReduxIcon />
					</div>
					<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
						<ReactIcon />
					</div>
					<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'></div>
					<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'></div>
					<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'></div>
					<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'></div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
