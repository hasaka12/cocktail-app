import { RANDOM_COCKTAILS } from "../actions/types";

export default function searchCocktailReducer(state = null, action) {
    switch(action.type) {
        case RANDOM_COCKTAILS:
            return action.payload;
        default:
            return state;
    }
}