import React, { useState } from 'react';
import { useFieldChange } from '../hooks/useFiledChange';
import styles from '../styles';
import Input from './Input';

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
			/>
			<Input
				placeholder='Email*'
				value={formData.email}
				type='email'
				onChange={handleChange('email')}
			/>
			<Input
				multiline
				numberOfLines={4}
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
