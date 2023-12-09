import Footer from 'components/footer';
import Header from 'components/header';
import Hero from 'components/hero/hero';
import Summary from 'components/hero/summary';
import MyProjects from 'components/projects/MyProjects';
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
		<div>
			<Header />
			<Hero isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
			<Summary />
			<Resume />
			<MyProjects />
			<Skills />
			<Footer />
		</div>
	);
};
export default Home;
