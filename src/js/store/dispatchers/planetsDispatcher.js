
const planetsDispatcher = {
	get: async () => {
		const response = await fetch ('https://www.swapi.tech/api/planets/', {
			method: 'GET',
			headers: {'Content-Type' : 'application/json'}
		});
		const { results } = await response.json();
		return results;
		}
	} 

export default planetsDispatcher;