import validator from 'validator';

export function emailValidation(val: string) {
	return validator.isLength(val, { min: 5, max: 100 }) && validator.isEmail(val);
}

export function descriptionValidation(val: string) {
	return validator.isLength(val, { min: 10, max: 255 });
}
export function nameValidation(val: string) {
	return validator.isLength(val, { min: 2, max: 50 });
}

