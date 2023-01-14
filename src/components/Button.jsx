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
			type={type}
			className={className}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
