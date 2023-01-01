const isFunc = (val) => typeof val === 'function';

export const useFieldChange =
	(setState) => (fieldName) => (fieldValue) => {
		setState((state) => ({
			...state,
			[fieldName]: isFunc(fieldValue)
				? fieldValue(state[fieldName])
				: fieldValue,
		}));
	};
