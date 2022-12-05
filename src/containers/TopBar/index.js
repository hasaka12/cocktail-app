import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { searchCocktails } from '../../actions/postActions';


const SearchAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Cocktail Maker
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const searchCocktailFunc = dispatch => {
  return bindActionCreators({ searchCocktails }, dispatch)
}

export default connect(null, searchCocktailFunc)(SearchAppBar);
