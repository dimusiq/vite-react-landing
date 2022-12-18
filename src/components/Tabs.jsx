import { useState } from 'react';
import styles from '../styles';
import { tabs } from '../constants';
import { how, how2 } from '../assets';
import Button from './Button';

const Tabs = () => {
	const [toggleState, setToggleState] = useState();

	const handleTabClick = (e) => {
		setToggleState(e.target.id);
	};

	return (
		<div className='px-[50px] md:px-[75px]'>
			<h1 className='text-[48px] md:mb-[50px]'>Как мы работаем</h1>
			<div className='text-[18px] md:mb-[45px]'>
				{tabs.map((tab, i) => (
					<button
						key={i}
						id={tab.id}
						className={
							toggleState !== tab.id ? 'bg-yellow-600 mr-[45px]' : 'bg-black'
						}
						onClick={handleTabClick}>
						{tab.tabTitle}
					</button>
				))}
			</div>
			<div className='content'>
				{tabs.map((tab, i) => (
					<div className='flex flex-1 ' key={i}>
						{toggleState === `${tab.id}` && (
							<div>
								<h2 className='text-[24px] font-bold leading-8'>{tab.title}</h2>
								<p className={`${styles.paragraph}`}>{tab.content}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Tabs;
