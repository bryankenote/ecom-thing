export const createQueryString = (params: {
	[param: string]: string | number | undefined | null;
}) => {
	const qsArray = Object.entries(params).filter(
		(kvPair) => kvPair[1] !== undefined && kvPair[1] !== null,
	);

	if (qsArray.length === 0) {
		return '';
	}

	const qsPair = qsArray.map((pair) => `${pair[0]}=${pair[1]}`);

	const qString = '?' + qsPair.join('&');

	return qString;
};
