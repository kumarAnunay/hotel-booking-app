import './App.css';
import NavBar from './Components/NavBar';
import Home from './Containers/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HotelDetails from './Containers/HotelDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hotel-details/:slug" element={<HotelDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
