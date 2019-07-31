import { useState, useEffect } from 'react';

const useCharLimit = (initialState, limit) => {
	const [value, setValue] = useState(initialState);

	useEffect(() => {
		if(value.length > limit) {
			setValue( value.substring(0, limit) );
		}
	});

	return [value, setValue];
};

export default useCharLimit;