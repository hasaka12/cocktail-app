import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { NavigationService } from "../../services";
import { Route } from "../../constants/routes-enum";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

interface NavItem {
  name: string;
  route: Route;
}
const TopAppBar = () => {
  const navItems: Array<NavItem> = [
    { name: "Search", route: Route.Search },
    { name: "Favorites", route: Route.Favorite },
  ];
  const favoriteCocktail = useSelector(
    (state: RootState) => state.favoriteCocktail.data
  );

  console.log(favoriteCocktail.length);

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ cursor: "pointer" }}
            sx={{ flexGrow: 1 }}
            onClick={() => {
              NavigationService.navigate(Route.Home);
            }}
          >
            Cocktail Maker
          </Typography>
          <Box>
            {navItems.map((item: NavItem) => (
              <Button
                key={item.name}
                sx={{ color: "#fff" }}
                onClick={() => {
                  NavigationService.navigate(item.route);
                }}
              >
                {`${item.name} ${
                  item.name === "Favorites" &&
                  favoriteCocktail &&
                  favoriteCocktail.length
                    ? `(${favoriteCocktail.length})`
                    : ""
                }`}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopAppBar;
