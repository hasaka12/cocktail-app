import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ActionAreaCard from '../../components/ActionAreaCard';

const FavoriteCocktails = props => {
  const [favList, setFavList] = useState(null);
  useEffect(() => {
    if (props.favoriteCocktails) {
      setFavList(props.favoriteCocktails);
    }
  }, [props.favoriteCocktails])

  return (
    <div>
      {favList && favList.length > 0 && <h3>Favorite Cocktails</h3>}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container sx={{ pl: 2 }}>
          {favList && favList.length > 0 && favList.map(data => (
            <Grid key={data.idDrink} sx={{ m: 2 }} item xs>
              <ActionAreaCard
                title={data.strDrink}
                desc={data.strCategory}
                img={data.strDrinkThumb}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    favoriteCocktails: state.favoriteCocktails
  }
}

export default connect(mapStateToProps)(FavoriteCocktails);
