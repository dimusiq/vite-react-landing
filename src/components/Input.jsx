import React from 'react';
import styles from '../styles';

const Input = ({
	label,
	type,
	value,
	onChange,
	placeholder,
	className,
}) => {
	return (
		<div >
			<label>
				{label}
				<input
					type={type}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder={placeholder}
					className={className}
				></input>
			</label>
		</div>
	);
};

export default Input;
