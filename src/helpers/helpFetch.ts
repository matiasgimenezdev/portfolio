export const helpFetch = async (url: string) => {
	try {
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});

		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		throw new Error('Error fetching data from JSON file');
	}
};
