import Hero from 'components/hero/hero';
import Summary from 'components/hero/summary';
import Resume from 'components/resume/resume';
import Skills from 'components/skills/skills';

const Home = () => {
	return (
		<div className='font-ubuntu'>
			<Hero />
			<Summary />
			<Resume />
			<Skills />
		</div>
	);
};
export default Home;
