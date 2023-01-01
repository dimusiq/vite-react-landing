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
		<div className='mt-[25px]'>
			<label>
				{label}
				<input
					type={type}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder={placeholder}
					className={`${styles.inputStyles} `}
				></input>
			</label>
		</div>
	);
};

export default Input;
