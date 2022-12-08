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
						className={`text-[18px] cursor-pointer ${
							index === navLinks.length - 1 ? 'mr-[260px]' : 'mr-[85px]'
						}`}>
						<a href={`#${link.id}`}>{link.title}</a>
					</li>
				))}
			</ul>
			<Search />
		</nav>
	);
};

export default Header;
