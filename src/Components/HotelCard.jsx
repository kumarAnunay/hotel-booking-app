import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Rating } from "@mui/material";
import { useNavigate } from "react-router";

const HotelCard = (props) => {
  const { hotel } = props;
  const navigate = useNavigate();

  const hotelDetailsPAgeHandler = () => {
    navigate(`/hotel-details/${hotel.slug}`);
  };

  return (
    <Card sx={{ maxWidth: 350, mb: 2 }} onClick={hotelDetailsPAgeHandler}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={hotel.thumbnail}
          alt="Hotel"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {hotel.address}
          </Typography>
          <Typography variant="body2" color="text.primary">
            ${hotel.pricePerNight} night
          </Typography>
          <Rating name="read-only" value={Math.floor(hotel.rating)} readOnly />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HotelCard;
