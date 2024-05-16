
const vehiclesDispatcher = {
	get: async () => {
		const response = await fetch ('https://www.swapi.tech/api/vehicles/', {
			method: 'GET',
			headers: {'Content-Type' : 'application/json'}
		});
		const { results } = await response.json();
		return results;
		},
		getById: async (id) => {
            const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`, {
                method: 'GET',
                headers: {'Content-Type' : 'application/json'}
            });
           
            const  {result}  = await response.json();
            return result; 
        }
	} 

export default vehiclesDispatcher;