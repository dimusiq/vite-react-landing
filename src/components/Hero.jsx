import React from 'react';
import styles from '../styles';
import Button from './Button';
import Slider from './Slider';

const Hero = () => {
	return (
		<div>
			<div className='relative h-full py-[40px] md:py-[50px] px-[50px]  md:px-[75px]'>
				<Slider />
				<div className=' text-white flex items-start flex-col top-20  absolute md:mt-[100px] md:ml-[80px]'>
					<h5 className='font-extrabold ml-[77px] md:ml-0 text-[60px] md:text-[70px] mb-[20px] md:mb-[24px] leading-[73px] md:leading-[75px]'>
						Проектные решения <br className='sm:block hidden' /> любой сложности
					</h5>
					<p className='text-[20px]  ml-[77px] md:ml-0 md:text-[24px]  font-bold leading-[24px]'>
						Есть над чем задуматься: базовые сценарии поведения
						<br className='sm:block hidden' />
						пользователей и по сей день остаются уделом проектантов
					</p>
					<Button
						className={`${styles.buttonStyles}  ml-[77px] md:ml-0 mt-[60px]  md:w-[280px]  md:h-[78px]  md:mt-[90px] font-bold text-[23px]  md:leading-[28px] btn-orange`}>
						Заказать расчёт
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
