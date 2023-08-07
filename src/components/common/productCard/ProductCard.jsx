import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ width: 360 }}>
      <CardMedia sx={{ height: 360 }} image={item.img} title="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="justify">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" variant="contained">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
