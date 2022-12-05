import { FAVORITE_COCKTAILS } from "../actions/types";

export default function favoriteCocktailReducer(state = null, action) {
    switch(action.type) {
        case FAVORITE_COCKTAILS:
            return action.payload;
        default:
            return state;
    }
}