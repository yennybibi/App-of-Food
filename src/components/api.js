
import axios from 'axios';


const API_URL = 'https://themealdb.com/api/json/v1/1/';

export const fetchMealsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}filter.php?c=${category}`);
    return response.data.meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
};
