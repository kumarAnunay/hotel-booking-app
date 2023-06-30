import './App.css';
import Home from './Containers/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HotelDetails from './Containers/HotelDetails';
import Login from './Containers/Login';
import Layout from './Containers/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Layout><Home /></Layout>}></Route>
          <Route path="/hotel-details/:slug" element={<Layout><HotelDetails /></Layout>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
