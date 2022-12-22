import { Suspense, useState } from 'react';
import styles from '../styles';
import { tabs } from '../constants';

import Button from './Button';

const Tabs = () => {
	const [currentTab, setCurrentTab] = useState('1');
	console.log(currentTab);
	const handleTabClick = (e) => {
		setCurrentTab(e.target.id);
	};

	return (
		<div className=' px-[50px] md:px-[75px] '>
			<h1 className='text-[48px] md:mb-[50px] '>Как мы работаем</h1>
			<div className='text-left text-[18px] md:mb-[45px] '>
				{tabs.map((tab, i) => (
					<button
						key={i}
						id={tab.id}
						disabled={currentTab === `${tab.id}`}
						className='mr-6 text-[18px] leading-5 hover:text-orange-500'
						onClick={handleTabClick}>
						{tab.tabTitle}
					</button>
				))}
			</div>

			<div className='content'>
				{tabs.map((tab, i) => (
					<div className='relative '>
						{currentTab === `${tab.id}` && (
							<div
								key={i}
								className=' flex flex-col-reverse md:flex-row  gap-12 '>
								<div className='flex flex-1 flex-col items-center md:items-start'>
									<h4 className='text-[24px] font-bold leading-8 text-center md:text-left '>
										{tab.title}
									</h4>
									<p
										className={`${styles.paragraph} flex text-center md:text-left `}>
										{tab.content}
									</p>
									<div className='flex justify-start flex-wrap gap-8  h-[60px] '>
										<Button className={`${styles.buttonStyles}  `}>
											Подробнее
										</Button>
										<Button
											className={`${styles.buttonStyles} text-black  border-black border bg-slate-100 hover:border-none`}>
											Договор
										</Button>
									</div>
								</div>
								<div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0'>
									<img
										loading='lazy'
										src={tab.image}
										alt='image'
										className='object-cover w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full'
									/>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Tabs;
