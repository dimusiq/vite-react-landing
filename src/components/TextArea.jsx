import styles from '../styles';

const TextArea = ({
	label,
	type,
	value,
	onChange,
	placeholder,
	className
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
					className={className}
					cols='10'
					rows='5'
				></textarea>
			</label>
		</div>
	);
};

export default TextArea;
