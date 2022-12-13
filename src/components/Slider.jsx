import React, { useState } from 'react';
import { sliderData } from '../assets/index';
import styles from '../styles';

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(1);

	const moveDot = (index) => {
		setSlideIndex(index);
	};

	return (
		<div className={`${styles.sectionWidth} relative w-full overflow-hidden`}>
			{sliderData.map((data, index) => {
				return (
					<div
						key={data.id}
						className={
							slideIndex === index + 1
								? 'opacity-1'
								: 'w-full h-full absolute opacity-0 transition-opacity ease-in-out'
						}>
						<img src={data.image} alt={data.title} />
					</div>
				);
			})}
			<div className='flex  translate-x-7 '>
				{Array.from({ length: 3 }).map((item, index) => (
					<div
						onClick={() => moveDot(index + 1)}
						className={
							slideIndex === index + 1
								? 'w-10 h-10 rounded-full  bg-indigo-500 cursor-pointer '
								: 'w-5 h-5 rounded-full  bg-black cursor-pointer'
						}></div>
				))}
			</div>
		</div>
	);
};

export default Slider;
