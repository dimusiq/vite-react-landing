import styles from '../styles';

const TextArea = ({
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
				<textarea
					type={type}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder={placeholder}
					className={`${styles.inputStyles}`}
					cols='20'
					rows='10'
				></textarea>
			</label>
		</div>
	);
};

export default TextArea;
