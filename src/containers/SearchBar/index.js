import React, { useState, useEffect } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchCocktails, favoriteCocktails } from '../../actions/postActions';

const SearchBar = props => {
  const [favList, setFavList] = useState(null); 
  const [cocktails, setCocktails] = useState(null); 

  useEffect(() => {
    if(favList) {
      console.log(favList)
      props.favoriteCocktails(favList)
    }
  }, [favList, props])

  useEffect(() => {
    if (props.cocktails) {
      setCocktails(props.cocktails.drinks);
    }
  }, [props.cocktails])

  return (
    <Stack spacing={3} sx={{ width: '100%'}}>
      <Autocomplete
        multiple
        id="fav-items"
        options={cocktails && cocktails.length > 0 ? cocktails : []}
        getOptionLabel={(option) => option.strDrink}
        filterSelectedOptions
        onChange={(e, newValue) => setFavList(newValue)}
        onInputChange={(e, value) => props.searchCocktails(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Favorite Cocktail(s)"
            placeholder="Favorites"
          />
        )}
      />
    </Stack>
  )
}

const searchCocktailFunc = dispatch => {
    return bindActionCreators({ searchCocktails, favoriteCocktails }, dispatch)
}

const mapStateToProps = state => {
    return {
      cocktails: state.searchCocktails
    }
}
  
export default connect(mapStateToProps, searchCocktailFunc)(SearchBar);