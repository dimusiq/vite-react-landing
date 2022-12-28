import React from 'react';
import { about, cube, gearwheel } from '../assets';
import styles from '../styles';
import Button from './Button';

const About = () => {
	return (
		<section className=' mb-10 px-[50px] md:px-[75px]'>
			<div className='bg-white border-2  grid overflow-hidden md auto-cols-auto grid-rows-3 gap-6 grid-flow-row w-auto h-auto'>
				<div className='bg-white row-start-1 row-end-1 col-start-1 col-end-4'>
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
				<div
					className=' relative bg-white row-start-2 row-end-2 md:row-end-4 col-start-1 col-end-1 mt-[60px]  md:mt-0 md:col-start-1 
				 md:col-end-3'
				>
					<img
						src={about}
						alt='about'
						className='w-full h-full z-0 object-cover'
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
				<div className='flex bg-white row-start-2 row-end-2 col-start-3 col-end-3 border-2 rounded-2xl items-center '>
					<div className='flex flex-1 justify-between'>
						<div className='relative w-[120px] h-[120px] btn-orange rounded-full ml-[40px]  object-cover'>
							<img
								src={cube}
								alt='cube'
								className='absolute bottom-8 left-8 w-full h-full'
							/>
						</div>
						<div className='flex flex-1 flex-col justify-between '>
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
				<div className='flex h-full bg-white row-start-3 row-end-3 col-start-3 col-end-3 border-2 rounded-2xl items-center '>
					<div className=' flex flex-1 justify-between'>
						<div className='relative w-[120px] h-[120px] btn-orange rounded-full ml-[40px]  object-cover'>
							<img
								src={gearwheel}
								alt='gearwheel'
								className='absolute bottom-8 left-8 w-full h-full'
							/>
						</div>
						<div className='flex flex-1 justify-between items-center '>
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
