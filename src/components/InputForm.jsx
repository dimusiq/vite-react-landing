import { useState } from 'react';
import { TextArea } from '.';
import { useFieldChange } from '../hooks/useFiledChange';
import Input from './Input';
import Button from './Button';
import styles from '../styles';

const InputForm = ({ onSubmit }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		textarea: '',
	});
	const handleChange = useFieldChange(setFormData);

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
		setFormData('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				placeholder='Фамилия, имя и отчество*'
				value={formData.name}
				type='text'
				onChange={handleChange('name')}
				className={`${styles.inputStyles} mt-[25px]`}
			/>
			<Input
				placeholder='Email*'
				value={formData.email}
				type='email'
				onChange={handleChange('email')}
				className={`${styles.inputStyles} mt-[25px] `}
			/>

			<TextArea
				placeholder='Сообщение'
				value={formData.textarea}
				type='textarea'
				onChange={handleChange('textarea')}
				className={`${styles.inputStyles} `}
			/>
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
