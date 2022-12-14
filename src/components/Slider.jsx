import { useState, useEffect } from 'react';
import { sliderData } from '../assets/index';
import styles from '../styles';

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(1);

	//
	const nextSlide = () => {
		if (slideIndex !== sliderData.length) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === sliderData.length) {
			setSlideIndex(+1);
		}
	};

	const moveDot = (index) => {
		setSlideIndex(index);
	};

	//делаем бесконечную прокрутку слайдов
	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 4000);
		return () => clearInterval(interval);
	});

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
			<div className='flex w-full justify-center items-center absolute bottom-0  mb-[30px] '>
				{Array.from({ length: 3 }).map((data, index) => (
					<div
						key={index}
						onClick={() => moveDot(index + 1)}
						className={`${
							slideIndex === index + 1
								? 'w-[15px] h-[15px] mr-[20px] rounded-full  bg-white cursor-pointer '
								: 'w-[15px] h-[15px] mr-[20px] rounded-full  bg-gray-400 cursor-pointer'
						} `}></div>
				))}
			</div>
		</div>
	);
};

export default Slider;
