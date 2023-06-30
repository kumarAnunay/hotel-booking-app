import HotelCard from "../Components/HotelCard";
import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import NavBar from "../Components/NavBar";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const locationInfo = useLocation();

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
      <NavBar />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Typography>Welcome {locationInfo.state.userName}</Typography>
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
