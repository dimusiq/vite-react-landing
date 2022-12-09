import React from 'react';
import { logo } from '../assets';
import { navLinks } from '../constants';

import { Search } from '../components';

const Header = () => {
	return (
		<nav className='w-full flex justify-between items center navbar'>
			<img
				src={logo}
				alt='logo'
				className='w-[225px] h-[72px] mt-[14px] ml-[75px]'
			/>
			<ul className='list-none md:flex hidden justify-end items-center flex-1'>
				{navLinks.map((link, index) => (
					<li
						key={link.id}
						className={`text-[18px] cursor-pointer text-lg md:text-base lg:text-lg font-medium group ${
							index === navLinks.length - 1 ? 'mr-10' : 'mr-[85px]'
						}`}>
						<a href={`#${link.id}`}>{link.title}</a>
						<div className='h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out'></div>
					</li>
				))}
			</ul>
			<Search />
		</nav>
	);
};

export default Header;
