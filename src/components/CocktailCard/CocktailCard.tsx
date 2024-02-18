import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";

import { CocktailsDto } from "../../models";

export interface CocktailCardProps {
  title: string;
  desc?: string;
  isAddedToFavorite?: boolean;
  cocktail?: CocktailsDto;
  handleAddFavorite?: (cocktail: CocktailsDto) => void;
  img: string;
}

const CocktailCard = ({
  title,
  desc,
  img,
  isAddedToFavorite,
  cocktail,
  handleAddFavorite,
}: CocktailCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={img} alt={desc} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {desc ? (
          <Typography
            variant="body2"
            color="text.secondary"
            id="description-text"
          >
            {desc}
          </Typography>
        ) : null}
      </CardContent>
      {cocktail ? (
        <div className="m-2">
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              handleAddFavorite && cocktail && handleAddFavorite(cocktail);
            }}
            endIcon={
              <StarIcon color={isAddedToFavorite ? "warning" : "inherit"} />
            }
          >
            {isAddedToFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </Button>
        </div>
      ) : null}
    </Card>
  );
};

export default CocktailCard;
