import { Button, Input, InputForm } from '../components';
import React from 'react';
import { footerLinks } from '../constants';
import { logo2, vk, odnoklassniki } from '../assets';
import styles from '../styles';

const Footer = () => {
	return (
		<footer className='bg-black text-white w-full flex flex-row justify-between px-[50px] md:px-[75px] py-[50px]'>
			<nav className='flex flex-col justify-between'>
				<div>
					<a href='/'>
						<img src={logo2} alt='logo2' />
					</a>
				</div>
				<ul className='flex flex-col justify-between'>
					{footerLinks.map((link, i) => (
						<li
							className='text-lg text-gray-300 lg:text-lg font-medium group'
							key={i}
						>
							<a href={link.id}>{link.title}</a>
						</li>
					))}
				</ul>
				<div className='flex'>
					<a href='https://ok.ru/'>
						<img
							src={odnoklassniki}
							alt='odnoklassniki'
							className='mr-[25px]'
						/>
					</a>
					<a href='https://vk.ru/'>
						<img src={vk} alt='vk' />
					</a>
				</div>
			</nav>
			<div className='flex justify-between items-center'>
				<div className=''>
					<h1 className='text-[48px] text-gray-300 font-normal leading-[59px]'>
						Оставить заявку
					</h1>
					<InputForm />
				</div>
			</div>
			<div className='hidden md:mt-[50px]  md:flex md:w-[363px] md:leading-8 md:text-gray-300  '>
				<p className={`${styles.paragraph}`}>
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
