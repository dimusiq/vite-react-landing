import React from 'react';
import Slider from './Slider';

const Hero = () => {
	return (
		<div>
			<div className='relative 2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10'>
				<Slider> </Slider>
				<div className='hidden md:block absolute text-center'>
					<h5>Проектные решения любой сложности</h5>
					<p>
						Есть над чем задуматься: базовые сценарии поведения пользователей
						и по сей день остаются уделом проектантов
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
