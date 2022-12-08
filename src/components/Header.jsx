import React from 'react';
import { logo } from '../assets';
import { navLinks } from '../constants';

const Header = () => {
	return (
		<nav className='w-full flex py-6 justify-between items center '>
			<img src={logo} alt='logo' className='w-[225px] h-[72px] mt-0 mr-0' />
			<ul className='list-none md:flex hidden justify-end items-center flex-1'>
				{navLinks.map((link, index) => (
					<li
						key={link.id}
						className={`text-[18px] cursor-pointer ${
							index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
						}`}>
						<a href={`${link.id}`}>{link.title}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Header;
