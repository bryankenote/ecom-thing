import { createQueryString } from './util';

describe('createQueryString', () => {
	test('handles key value pairs', () => {
		const input = { limit: 5, offset: 0 };
		const expected = '?limit=5&offset=0';

		const output = createQueryString(input);
		expect(output).toEqual(expected);
	});

	test('handles undefined value', () => {
		const input = { limit: undefined, offset: 0 };
		const expected = '?offset=0';

		const output = createQueryString(input);
		expect(output).toEqual(expected);
	});

	test('handles no defined values', () => {
		const input = { limit: undefined, offset: null };
		const expected = '';

		const output = createQueryString(input);
		expect(output).toEqual(expected);
	});
});
