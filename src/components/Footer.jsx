import { Input } from '../components';
import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-black text-white w-full'>
			<div className='flex justify-between items-center py-2 px-6 mx-auto  md:px-12 lg:px-16 xl:px-24 '>
				<div className='mt-[50px]'>
					<Input />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
