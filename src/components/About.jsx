import React from 'react';
import { about, cube, gearwheel } from '../assets';
import styles from '../styles';
import Button from './Button';

const About = () => {
	return (
		<section className='mb-10 px-[50px] md:px-[75px]'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 '>
				<div className='  md:col-span-2'>
					<h1 className='text-[48px] leading-8'>О нас</h1>
					<p className={`${styles.paragraph} mt-[20px]`}>
						Также как перспективное планирование создаёт
						необходимость включения в производственный план
						целого ряда внеочередных мероприятий с учётом
						комплекса экспериментов, поражающих по своей
						масштабности и грандиозности. А также диаграммы
						связей могут быть описаны максимально подробно.
						Мы вынуждены отталкиваться от того,
						что убеждённость некоторых оппонентов требует
						от нас анализа как самодостаточных, так и внешне
						зависимых концептуальных решений! Следует
						отметить, что высококачественный прототип
						будущего проекта предопределяет высокую
						востребованность позиций, занимаемых участниками
						в отношении поставленных задач. Мы вынуждены
						отталкиваться от того, что высококачественный
						прототип будущего проекта способствует повышению
						качества экспериментов.
					</p>
				</div>
				<div className='relative rounded-lg   md:row-span-2'>
					<img
						src={about}
						alt='about'
						className='w-full h-full z-0 object-contain md:object-cover rounded-3xl '
					/>
					<div className='absolute bottom-0 w-full h-[30%] z-10 text-[16px] backdrop-opacity-10 backdrop-invert bg-black/30 rounded-3xl object-cover flex justify-between items-center'>
						<div className='flex px-[50px]'>
							<p className={`${styles.paragraph}`}>
								Принимая во внимание показатели успешности,
								перспективное планирование способствует
								подготовке и реализации новых принципов
							</p>
							<Button
								className={`${styles.buttonStyles} border-yellow-600 backdrop-opacity-10 backdrop-invert bg-black/20 border-[3px]`}
							>
								Подробнее
							</Button>
						</div>
					</div>
				</div>
				<div className='border-2 rounded-2xl min-h-[295px]'>
					<div className='flex flex-1 justify-between items-center py-[65px] px-[60px]'>
						<div className='relative w-[120px] h-[120px] btn-orange rounded-full object-cover mr-[50px]'>
							<img
								src={cube}
								alt='cube'
								className='absolute bottom-8 left-8 w-full h-full'
							/>
						</div>
						<div className='flex flex-1 flex-col justify-between items-center '>
							<h1 className='font-bold '>
								Консультация с широким активом
							</h1>
							<p className={`${styles.paragraph}`}>
								А также свежий взгляд на привычные вещи —
								безусловно открывает новые горизонты
								для как самодостаточных, так и внешне
								зависимых концептуальных решений
							</p>
						</div>
					</div>
				</div>
				<div className=' border-2 rounded-2xl  min-h-[295px] '>
					<div className='flex flex-1 justify-between items-center py-[65px] px-[60px]'>
						<div className='relative w-[120px] h-[120px] btn-orange rounded-full  object-cover mr-[50px]'>
							<img
								src={gearwheel}
								alt='gearwheel'
								className='absolute bottom-8 left-8 w-full h-full'
							/>
						</div>
						<div className='flex flex-1 flex-col justify-between items-center  '>
							<h1 className='font-bold'>
								Консультация с широким активом
							</h1>
							<p className={`${styles.paragraph}`}>
								А также свежий взгляд на привычные вещи —
								безусловно открывает новые горизонты
								для как самодостаточных, так и внешне
								зависимых концептуальных решений
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
