import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Main from './Main';
const API_URL = import.meta.env.VITE_APP_URL;

const getCSRFToken = () => {
  let csrfToken = null;
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'csrftoken') {
      csrfToken = value;
    }
  }
  console.log(csrfToken)
  return csrfToken;
};

axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken();


const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [newRestaurant, setNewRestaurant] = useState({ name: '', description: '', foodie: 1 });
  const [locations, setLocations] = useState([]);

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
    console.log(response)
    return response.data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const csrfToken = getCSRFToken();
      await axios.post(`${API_URL}/restaurants/`, newRestaurant, {
        headers: {
          'X-CSRFToken': csrfToken,
        },
      });
      const updatedRestaurants = await fetchRestaurants();
      setRestaurants(updatedRestaurants);
      setNewRestaurant({ name: '', description: '', foodie: 1 });
    } catch (error) {
      console.error("Error adding restaurant:", error);
    }
  };

  const handleChange = (e) => {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };

  return (
    <div>
   
      <Main restaurants={restaurants} locations={locations} />
      <h2>Add New Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={newRestaurant.name} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={newRestaurant.description} onChange={handleChange} required />
        </label>
        <button type="submit">Add Restaurant</button>
      </form>

    </div>
  );
};

export default App;
