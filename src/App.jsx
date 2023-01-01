import styles from './styles';

import {
	Header,
	About,
	Hero,
	Tabs,
	Faq,
} from './components';
import Footer from './components/Footer';

function App() {
	return (
		<div className='w-full overflow-hidden mx-auto'>
			<div className={`${styles.boxWidth}`}>
				<Header />
			</div>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
			<div className='h-full'>
				<About />
				<Tabs />
				<Faq />
				<Footer />
			</div>
		</div>
	);
}

export default App;
