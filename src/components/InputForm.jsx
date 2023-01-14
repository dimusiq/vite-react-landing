import { useState } from 'react';
import { TextArea } from '.';
import { useFieldChange } from '../hooks/useFiledChange';
import Button from './Button';
import styles from '../styles';

const InputForm = ({ onSubmit }) => {
	const [inputName, setInputName] = useState('');
	const [inputEmail, setInputEmail] = useState('');
	const [inputMessage, setInputMessage] = useState('');

	const nameChangeHandler = (e) => {
		setInputName(e.target.value);
	};
	const emailChangeHandler = (e) => {
		setInputEmail(e.target.value);
	};

	const messageChangeHandler = (e) => {
		setInputMessage(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const formData = {
			name: inputName,
			email: inputEmail,
			message: inputMessage,
		};
		setInputName('');
		setInputMessage('');
		setInputEmail('');
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				placeholder='Фамилия, имя и отчество*'
				value={inputName}
				type='text'
				onChange={nameChangeHandler}
				className={`${styles.inputStyles} mt-[25px]`}
			></input>
			<input
				placeholder='Email*'
				value={inputEmail}
				type='email'
				onChange={emailChangeHandler}
				className={`${styles.inputStyles} mt-[25px] `}
			></input>

			<textarea
				placeholder='Сообщение'
				value={inputMessage}
				type='textarea'
				onChange={messageChangeHandler}
				className={`${styles.inputStyles} mt-[25px]`}
				cols='10'
				rows='5'
			></textarea>
			<div className='flex justify-between items-center mt-[32px]'>
				<Button
					type='submit'
					className={`${styles.buttonStyles} btn-orange px-[35px]`}
				>
					Отправить данные
				</Button>
				<div className='flex ml-5 '>
					<input type='checkbox' className=''></input>
					<span className=' px-1 text-gray-300'>
						Согласен на обработку данных
					</span>
				</div>
			</div>
		</form>
	);
};

export default InputForm;
