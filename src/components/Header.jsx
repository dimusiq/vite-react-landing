import { useState } from 'react';
import { navLinks } from '../constants';
import { menu, close, logo } from '../assets';
import Search from './Search';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [searchActive, setSearchActive] = useState(true);

	return (
		<header className='w-full text-gray-900 mt-1'>
			<nav className='flex justify-between items-center py-2 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24 border-b rounded-3xl shadow-md'>
				<button
					className='block md:hidden relative z-30 focus:outline-none transform  -translate-x-1/2 -translate-y-1/2 active:scale-75 transition-transform'
					onClick={() => setToggle((prev) => !prev)}>
					{toggle ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5 transform transition duration-500 ease-in-out'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path
								fillRule='evenodd'
								d='M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5 transform transition duration-500 ease-in-out'
							viewBox='0 0 20 20'
							fillRule='currentColor'>
							<path
								fillRule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'
							/>
						</svg>
					)}
				</button>
				<div>
					<img src={logo} alt='logo' />
				</div>
				<div
					className={`${
						toggle ? 'fixed' : 'hidden'
					}  flex inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 flex-col md:flex-row md:space-x-8  md:mt-0'`}>
					<ul className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8'>
						{navLinks.map((link, id) => (
							<li
								key={id}
								className='text-lg md:text-base lg:text-lg font-medium group '>
								<a href={link.id}>{link.title}</a>
								<div className='h-0.5 btn-orange scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out'></div>
							</li>
						))}
					</ul>
				</div>
				<button
					className='flex justify-center items-center h-12 px-5 font-medium text-gray-100 btn-orange whitespace-nowrap hover:bg-orange-500 hover:text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 focus:outline-none'
					onClick={() => setSearchActive((prev) => !prev)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
							clipRule='evenodd'
						/>
					</svg>
				</button>
			</nav>
			<Search active={searchActive} setActive={setSearchActive} />
		</header>
	);
};

export default Header;
