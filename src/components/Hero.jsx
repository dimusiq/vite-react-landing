import React from 'react';
import styles from '../styles';
import Button from './Button';
import Slider from './Slider';

const Hero = (props) => {
	return (
		<div>
			<div className='relative mx-auto py-[50px] px-[75px]'>
				<Slider> </Slider>
				<div className=' text-white flex items-start flex-col top-20 absolute ml-[80px] mt-[50px] mb-[268px]'>
					<h5 className='font-extrabold text-[70px] mb-[24px] leading-[75px]'>
						Проектные решения <br className='sm:block hidden' /> любой сложности
					</h5>
					<p className='text-[24px]  font-bold leading-[24px]'>
						Есть над чем задуматься: базовые сценарии поведения
						<br className='sm:block hidden' />
						пользователей и по сей день остаются уделом проектантов
					</p>
					<Button
						className={`${styles.buttonStyles} w-[280px] h-[78px] mt-4 font-bold text-[23px] leading-[28px] btn-orange hover:bg-orange-500`}>
						Заказать расчёт
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
