import { combineReducers } from 'redux';

import searchCocktailReducer from './searchCocktails';
import randomCocktailReducer from './randomCocktails';
import favoriteCocktailReducer from './favoriteCocktails';

const rootReducer = combineReducers( {
    searchCocktails: searchCocktailReducer,
    randomCocktails: randomCocktailReducer,
    favoriteCocktails: favoriteCocktailReducer,
})

export default rootReducer;
