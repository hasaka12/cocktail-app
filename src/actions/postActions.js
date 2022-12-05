import axios from 'axios';

import { RANDOM_COCKTAILS, SEARCH, FAVORITE_COCKTAILS } from "./types";

let promises = [];
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1' // TODO: need to replace with .env

export const searchCocktails = val => dispatch => {
    axios.get(`${baseUrl}/search.php?s=${val}`)
    .then(res => {
        dispatch({
            type: SEARCH,
            payload: res.data
        })
    })
    .catch(err => {
        console.error(err)
    })
}

export const favoriteCocktails = val => {
    return {
        type: FAVORITE_COCKTAILS,
        payload: val,
    }
}

export const randomCocktails = () => dispatch => {
    getRandoms()
    Promise.all(promises)
      .then(res => {
        promises = [];
        dispatch({
            type: RANDOM_COCKTAILS,
            payload: res
        })
      })
      .catch(e => {
        console.error(e);
      });
}

export const getRandomData = async () => {
    const url = `${baseUrl}/random.php`;
    try {
      const res = await axios.get(url);
  
      const { data } = res;
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
};

const getRandoms = () => {
    for (let i = 0; i < 5; i += 1) {
        const imageLink = getRandomData();
        promises.push(imageLink);
    }
}