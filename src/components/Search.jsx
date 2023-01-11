import { Input } from '../components';
import React from 'react';
import { search } from '../assets';

const Search = ({ active }) => {
	return (
		<div className={`${active ? 'hidden' : 'relative'}`}>
			<form className='flex absolute z-10 items-center right-11'>
				<div className='transform duration-500 transition-all'>
					<div className='flex align-middle bg-gray-200 rounded-xl items-center px-3 py-1 '>
						<Input
							placeholder='Что будем искать?'
							className='bg-gray-200 text-[18px] outline-none  border-b border-gray-400 '
						/>
						<img
							src={search}
							className='h-5 w-5 mr-3 pointer-events-none'
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Search;
