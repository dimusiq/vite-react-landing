import { useState } from 'react';
import { TextArea } from '.';
import { useFieldChange } from '../hooks/useFiledChange';
import Input from './Input';
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
		</form>
	);
};

export default InputForm;
