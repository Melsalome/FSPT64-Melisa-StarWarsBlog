import React from 'react'

const peopleDispatcher = {
	get: async () => {
		const response = await fetch ('https://www.swapi.tech/api/people/', {
			method: 'GET',
			headers: {'Content-Type' : 'application/json'}
		});
		const {results} = await response.json();
        // console.log(results)
		return results;
		},
         
    getById: async (id) => {
            const response = await fetch(`https://www.swapi.tech/api/people/${id}`, {
                method: 'GET',
                headers: {'Content-Type' : 'application/json'}
            });
            const  {result}  = await response.json();
            return result; 
        }
	}

export default peopleDispatcher;