import peopleDispatcher from './dispatchers/peopleDispatcher'
import planetsDispatcher from './dispatchers/planetsDispatcher';
import vehiclesDispatcher from './dispatchers/vehiclesDispatcher';
import Character from './../component/Character';




const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			charactersList : [],
			planetsList: [],
			vehiclesList: [],
		},
		actions: {
			getPeopleList: async () => {
			const charactersList = await peopleDispatcher.get();
			const store = getStore();
			setStore({...store, charactersList})
			},
			getPlanetsList: async () => {
					const planetsList = await planetsDispatcher.get();
					const store = getStore();
					setStore({...store, planetsList})
			},
			getVehiclesList: async () => {
				const vehiclesList = await vehiclesDispatcher.get();
				const store = getStore();
				setStore({...store, vehiclesList})},

			getCharacterDetailed: async (characterId) => {
				return peopleDispatcher.getById(characterId);
	
			}
		
			}
		}
	};


export default getState;
