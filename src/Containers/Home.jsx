import HotelCard from "../Components/HotelCard";
import { Container, Grid } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get("https://hotels-api-4ltr.onrender.com/api/hotels")
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={3}>
          {hotels.map((hotel) => {
            return (
              <Grid key={hotel.id} item md={4}>
                <HotelCard hotel={hotel} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
