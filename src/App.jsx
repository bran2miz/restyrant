import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from './axiosConfig'; 
import Main from './Main/index';
import AboutMe from './AboutMe/index';
const API_URL = import.meta.env.VITE_APP_URL;

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [newRestaurant, setNewRestaurant] = useState({ name: '', description: '', foodie: 1 });
  const [locations, setLocations] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState('');

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const restaurantData = await fetchRestaurants();
        const locationsData = await fetchLocations();
        setRestaurants(restaurantData);
        setLocations(locationsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    retrieveData();
  }, []);

  const fetchRestaurants = async () => {
    const response = await axios.get(`${API_URL}/restaurants/`);
    return response.data;
  };

  const fetchLocations = async () => {
    const response = await axios.get(`${API_URL}/locations/`);
    return response.data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const csrfToken = axios.defaults.headers.common['X-CSRFToken'];
      console.log("CSRF Token on Submit:", csrfToken); 
      await axios.post(`${API_URL}/restaurants/`, newRestaurant, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken 
        },
      });
      const updatedRestaurants = await fetchRestaurants();
      setRestaurants(updatedRestaurants);
      setNewRestaurant({ name: '', description: '', foodie: 1 });
    } catch (error) {
      console.error("Error adding restaurant:", error.response ? error.response.data : error.message);
    }
  };

  const handleChange = (e) => {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };

  const handleOpen = (type, item = null) => {
    console.log('Opening modal with item:', item);
    setSelectedItem(item);
    setModalType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main restaurants={restaurants} locations={locations} newRestaurant={newRestaurant} handleSubmit={handleSubmit} handleChange={handleChange} handleOpen={handleOpen} handleClose={handleClose} open={open} selectedItem={selectedItem} modalType={modalType}/>} />
          <Route path='/about' element={<AboutMe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
