import { useState } from 'react';

function useInput(initialValue) {
	// const error = {
	// 	name: [],
	// 	email: [],
	// 	phone: [],
	// 	query: []
	// };
	const [ value, setValue ] = useState(initialValue);
	const [ formError, setFormError ] = useState([]);
	const reset = () => {
		setValue(initialValue);
	};

	const bind = {
		value: value,
		onChange: (e) => {
			setValue(e.target.value);
			validateInput(e);
		},
		helperText: formError,
		error: formError.length > 0 ? true : false
	};

	const validateInput = function(e) {
		const id = e.target.id;
		const value = e.target.value;
		switch (id) {
			case 'name':
				if (value.length === 0) {
					setFormError([ 'Name cannot be empty' ]);
				} else {
					setFormError([]);
				}
				break;
			case 'email':
				if (value.length === 0) {
					setFormError([ 'Email cannot be empty' ]);
				} else if (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(value) === false) {
					setFormError([ 'Enter valid email' ]);
				} else {
					setFormError([]);
				}
				//check required
				//check email pattern
				break;
			case 'phone':
				if (value.length === 0) {
					setFormError([ 'Phone number cannot be empty' ]);
				} else if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(value) === false) {
					setFormError([ 'Invalid Phone number' ]);
				} else {
					setFormError([]);
				}
				//check required
				//check phone pattern
				break;
			case 'query':
				if (value.length === 0) {
					setFormError([ 'Query cannot be empty' ]);
				} else {
					setFormError([]);
				}
				//cehck required
				break;
			case 'fname':
				if (value.length === 0) {
					setFormError([ 'First name cannot be empty' ]);
				} else {
					setFormError([]);
				}
				break;
			case 'lname':
				if (value.length === 0) {
					setFormError([ 'Last name cannot be empty' ]);
				} else {
					setFormError([]);
				}
				break;
			case 'exp':
				if (value.length === 0) {
					setFormError([ 'Experience cannot be empty' ]);
				} else if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(value) === false) {
					setFormError([ 'Experience must be years' ]);
				} else {
					setFormError([]);
				}

				break;
			case 'cv':
				if (value.length === 0) {
					setFormError([ 'Cannot be empty' ]);
				} else {
					setFormError([]);
				}
				break;
			default:
				break;
		}
	};
	return [ value, bind, reset ];
}

export default useInput;
