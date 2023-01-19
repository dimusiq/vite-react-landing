const Button = ({
	className,
	onSubmit,
	onClick,
	children,
	type,
	...props
}) => {

	
	return (
		<button
			{...props}
			type={type}
			className={className}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
