import React from 'react';
import styles from '../styles';

const Input = ({ handleChange, label, placeholder, ...props }) => {
	return (
		<div>
			<h1 className='text-[48px] font-normal leading-[59px]'>
				Оставить заявку
			</h1>
			<form className='flex justify-between flex-col gap-3' {...props}>
				<label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
					{label}
				</label>
				<input
					type='text'
					placeholder='Фамилия, имя и отчество*'
					className={`${styles.inputStyles}`}></input>
				<input
					type='email'
					placeholder='Email*'
					className={`${styles.inputStyles}`}></input>
				<textarea
					className={`${styles.inputStyles}`}
					placeholder='Сообщение'
					cols='30'
					rows='5'></textarea>
			</form>
		</div>
	);
};

export default Input;
