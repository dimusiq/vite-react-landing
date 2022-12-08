import styles from './styles';

import { Header, Navbar, About, Hero, How, Faq } from './components';

function App() {
	return (
		<div className='w-full overflow-hidden'>
			<div className='flex justify-center items-center sm:py-16 py-6'>
				<div className={`${styles.boxWidth}`}>
					<Header />
				</div>
			</div>
		</div>
	);
}

export default App;
