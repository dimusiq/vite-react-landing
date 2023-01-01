import React from 'react';
import styles from '../styles';

const Input = ({
	label,
	type,
	value,
	onChange,
	placeholder,
}) => {
	return (
		<div className='w-full'>
			<div className='flex justify-between flex-col gap-3'>
				<label className=' text-sm font-medium text-gray-900 dark:text-white'>
					{label}
					<input
						type={type}
						value={value}
						onChange={(e) => onChange(e.target.value)}
						placeholder={placeholder}
						className={`${styles.inputStyles} mt-3`}
					></input>
				</label>
			</div>
		</div>
	);
};

export default Input;
