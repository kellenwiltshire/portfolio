import Footer from 'components/footer';
import Header from 'components/Header';
import Hero from 'components/hero/hero';
import Summary from 'components/hero/summary';
import Resume from 'components/resume/resume';
import Skills from 'components/skills/skills';
import { Dispatch, SetStateAction } from 'react';

const Home = ({
	isDarkMode,
	setIsDarkMode,
}: {
	isDarkMode: boolean;
	setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<div id='topDiv' className='font-ubuntu'>
			<Header />
			<Hero isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
			<Summary />
			<Resume />
			<Skills />
			<Footer />
		</div>
	);
};
export default Home;
