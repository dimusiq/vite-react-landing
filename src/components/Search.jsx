import React from 'react';

const Search = () => {
	return (
		<div className='relative mt-2 text-[16px] border mr-5'>
			<form action='' className='w-full max-w-md'>
				<div className='relative flex items-center'>
					<input
						type='text'
						name='search'
						id='search'
						placeholder='Что будем искать?'
						className='relative z-10 bg-transparent cursor-pointer w-12  h-10 pr-12 pl-2
						border-b-2 border-gray-400 outline-none focus:border-yellow-500
						 focus:cursor-pointer focus:w-full focus:pl-14 focus:pr-4 '
					/>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						className='absolute w-5 h-5 stroke-black '>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
						/>
					</svg>
				</div>
			</form>
		</div>
	);
};

export default Search;
