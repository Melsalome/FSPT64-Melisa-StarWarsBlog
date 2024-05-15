
const vehiclesDispatcher = {
	get: async () => {
		const response = await fetch ('https://www.swapi.tech/api/vehicles/', {
			method: 'GET',
			headers: {'Content-Type' : 'application/json'}
		});
		const { results } = await response.json();
		return results;
		}
	} 

export default vehiclesDispatcher;