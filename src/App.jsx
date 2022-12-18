import styles from './styles';

import { Header, Navbar, About, Hero, Tabs, Faq, Search } from './components';

function App() {
	return (
		<div className='w-full overflow-hidden'>
			<div className={`${styles.boxWidth}`}>
				<Header />
			</div>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
			<div className='h-full'>
				<About />
				<Tabs />
			</div>
		</div>
	);
}

export default App;
