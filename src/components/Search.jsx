import React from 'react';
import { search } from '../assets';

const Search = ({ active, setActive }) => {
	return (
		<div className={`${active ? 'hidden' : 'relative text-[16px] '}`}>
			<form action='' className=''>
				<div className=' flex items-center space-x-4 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24 transform duration-500 transition-all'>
					<div className='flex bg-gray-200 p-2 w-full space-x-2 rounded-lg items-center'>
						<img
							src={search}
							className='h-5 w-5 transform transition duration-500 ease-in-out'
						/>
						<input
							type='text'
							className='w-full bg-gray-50 outline-none border-transparent focus:border-transparent focus:ring-0 rounded-lg text-sm sm:text-base'
							placeholder='Что будем искать?'
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Search;
