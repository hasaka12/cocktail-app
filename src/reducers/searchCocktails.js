import { SEARCH } from "../actions/types";

export default function searchCocktailReducer(state = null, action) {
    switch(action.type) {
        case SEARCH:
            return action.payload;
        default:
            return state;
    }
}