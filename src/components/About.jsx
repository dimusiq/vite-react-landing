import React from 'react';
import { about, cube, gearwheel } from '../assets';
import styles from '../styles';

const About = () => {
	return (
		<section className=' px-[75px]'>
			<div className='bg-white border-2 grid overflow-hidden gap-4 grid-cols-4 grid-rows-3'>
				<div className='bg-white col-start-1 col-end-6'>
					<h1 className='text-[48px] leading-8'>О нас</h1>
					<p className={`${styles.paragraph}`}>
						Также как перспективное планирование создаёт необходимость включения
						в производственный план целого ряда внеочередных мероприятий
						с учётом комплекса экспериментов, поражающих по своей масштабности
						и грандиозности. А также диаграммы связей могут быть описаны
						максимально подробно. Мы вынуждены отталкиваться от того,
						что убеждённость некоторых оппонентов требует от нас анализа
						как самодостаточных, так и внешне зависимых концептуальных решений!
						Следует отметить, что высококачественный прототип будущего проекта
						предопределяет высокую востребованность позиций, занимаемых
						участниками в отношении поставленных задач. Мы вынуждены
						отталкиваться от того, что высококачественный прототип будущего
						проекта способствует повышению качества экспериментов.
					</p>
				</div>

				<div className=' bg-white col-start-1 col-end-3 row-start-2 row-end-4'>
					<img src={about} alt='about' />
				</div>
				<div className=' flex  bg-white col-start-3 col-end-6 border-2 rounded-2xl items-center'>
					<div className=''>
						<div className=' relative w-[120px] h-[120px] btn-orange rounded-full ml-[60px] mr-[120px] object-cover'>
							<img
								src={cube}
								alt='cube'
								className='absolute bottom-8 left-12 w-[119px] h-[132px]'
							/>
						</div>
					</div>
					<div className='max-w-[450px] ml-[50px] '>
						<h1 className='font-bold'>Консультация с широким активом</h1>
						<p className={`${styles.paragraph}`}>
							А также свежий взгляд на привычные вещи — безусловно открывает
							новые горизонты для как самодостаточных, так и внешне зависимых
							концептуальных решений
						</p>
					</div>
				</div>
				<div className='flex bg-white col-start-3 col-end-6 border-2 rounded-2xl items-center'>
					<div className=''>
						<div className='relative w-[120px] h-[120px] btn-orange rounded-full ml-[60px] mr-[120px] object-cover'>
							<img
								src={gearwheel}
								alt='gearwheel'
								className='absolute bottom-8 left-8 w-[135px] h-[135px]'
							/>
						</div>
					</div>
					<div className='max-w-[450px] ml-[50px] '>
						<h1 className='font-bold'>Консультация с широким активом</h1>
						<p className={`${styles.paragraph}`}>
							А также свежий взгляд на привычные вещи — безусловно открывает
							новые горизонты для как самодостаточных, так и внешне зависимых
							концептуальных решений
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
