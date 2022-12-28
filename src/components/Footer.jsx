import { Button, Input } from '../components';
import React from 'react';
import { footerLinks } from '../constants';
import { logo2, vk, odnoklassniki } from '../assets';
import styles from '../styles';

const Footer = () => {
	return (
		<footer className='bg-black text-white w-full flex flex-row justify-between px-[50px] md:px-[75px] py-[50px]'>
			<nav>
				<div>
					<img src={logo2} alt='logo' />
				</div>
				<ul className='flex flex-col justify-between'>
					{footerLinks.map((link, i) => (
						<li
							className='text-lg text-gray-300 lg:text-lg font-medium group'
							key={i}
						>
							<a href={link.id}>{link.title}</a>
							<div className='h-0.5 btn-orange scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out'></div>
						</li>
					))}
				</ul>
				<div className='flex'>
					<img
						src={odnoklassniki}
						alt='odnoklassniki'
						className='mr-[25px]'
					/>
					<img src={vk} alt='vk' />
				</div>
			</nav>
			<div className='flex justify-between items-center  mx-auto   '>
				<div className='text-gray-300 mx-5'>
					<Input />
					<div className='flex flex-1 justify-between items-center text-gray-300 mt-[32px]'>
						<Button className={`${styles.buttonStyles}`}>
							Отправить данные
						</Button>
						<div className='flex ml-6'>
							<input
								type='checkbox'
								className='bg-black'
							></input>
							<span>Согласен на обработку данных</span>
						</div>
					</div>
				</div>
			</div>
			<div className='hidden md:flex md:w-[363px] md:leading-8 md:text-gray-300 align-bottom '>
				<p className={`${styles.paragraph} `}>
					Высокий уровень вовлечения представителей целевой
					аудитории является чётким доказательством простого
					факта: разбавленное изрядной долей эмпатии,
					рациональное мышление позволяет оценить значение
					модели развития. Таким образом, консультация
					с широким активом обеспечивает широкому кругу
					(специалистов) участие в формировании стандартных
					подходов
				</p>
			</div>
		</footer>
	);
};

export default Footer;
