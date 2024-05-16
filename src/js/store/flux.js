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
			favoritesList: [],
			
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

			getCharacterDetailed: async (characterID) => {
				return peopleDispatcher.getById(characterID);
			},

			getPlanetDetailed: async (planetID) => {
				return planetsDispatcher.getById(planetID);
			},
			
			getVehicleDetailed: async (vehicleID) => {
				return vehiclesDispatcher.getById(vehicleID)
			},
			
			addFavorites: (name) => {
				// const newFavorite = {
				// 	name: name,
				// 	id: uid,
				// 	resource: resource
				// }
			const store = getStore();
			setStore({...store, favoritesList: [...store.favoritesList,name]})
			},

			deleteFavorite: (favoriteIndex) => {
				const store = getStore();
				const favoritesList = store.favoritesList.filter((favorite, index) => index != favoriteIndex)
				setStore({...store, favoritesList})
			}
			}
		}
	};


export default getState;
