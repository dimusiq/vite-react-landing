import React from 'react';

const Search = () => {
	return (
		<div className='relative text-[16px] '>
			<form action='' className=''>
				<div className=' flex items-center space-x-4 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24 transform duration-500 transition-all'>
					<div className='flex bg-gray-200 p-2 w-full space-x-2 rounded-lg items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 opacity-75 ml-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
							/>
						</svg>
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
