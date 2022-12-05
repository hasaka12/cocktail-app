import React, { useEffect, useState } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Container from "@mui/system/Container";
import Button from '@mui/material/Button';
import Refresh from '@mui/icons-material/Refresh';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import { randomCocktails } from "../../actions/postActions";
import FavoriteCocktails from "../FavoriteCocktails";
import SearchBar from "../SearchBar";
import ActionAreaCard from "../../components/ActionAreaCard";

const HomePage = props => {
    const [randomList, setRandomList] = useState(null);

    useEffect(() => {
        props.randomCocktails();
    }, [])

    useEffect(() => {
        if (props.randomCocktailList && props.randomCocktailList.length > 0) {
            setRandomList(props.randomCocktailList);
        }
    }, [props.randomCocktailList])

    const onRefresh = () => {
        setRandomList(null);
        props.randomCocktails();
    }

    return (
        <Container>
            <SearchBar />
            <FavoriteCocktails />
            <h3>Random Cocktails</h3>
            <Button 
                variant="outlined" 
                startIcon={<Refresh />} 
                onClick={onRefresh}
                sx={{ mb: 2 }}
            >
                Refresh
            </Button>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container sx={{ pl: 2 }}>
                    {randomList && randomList.length > 0 ? randomList.map((data, i) => (
                        <Grid key={i} sx={{ m: 2 }} item xs>
                            <ActionAreaCard 
                                title={data.drinks[0].strDrink && data.drinks[0].strDrink}
                                desc={data.drinks[0].strCategory && data.drinks[0].strCategory}
                                img={data.drinks[0].strDrinkThumb && data.drinks[0].strDrinkThumb}
                            />
                        </Grid>
                    )): <CircularProgress />}
                </Grid>
            </Box>
        </Container>
    );

}

const randomCocktailFunc = dispatch => {
    return bindActionCreators({ randomCocktails }, dispatch)
}

const mapStateToProps = state => {
    return {
        randomCocktailList: state.randomCocktails
    }
}
  
export default connect(mapStateToProps, randomCocktailFunc)(HomePage);