import React from 'react';

const Search = () => {
	return (
		<form>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='absolute mt-4 ml-4 w-5 h-5'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
				/>
			</svg>
			<input
				type='search'
				name='search'
				id='search'
				placeholder='Что будем искать?'
				className='relative z-10 bg-transparent w-12 h-12 pl-12 rounded-full  focus:w-full focus:border-black focus:cursor-text focus:pl-16 focus:pr-4 '
			/>
		</form>
	);
};

export default Search;
