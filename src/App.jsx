import styles from './styles';

import { Header, Navbar, About, Hero, How, Faq, Search } from './components';

function App() {
	return (
		<div className='w-full overflow-hidden'>
			<div className='flex justify-center items-center'>
				<div className={`${styles.boxWidth}`}>
					<Header />
					
				</div>
			</div>
		</div>
	);
}

export default App;
