import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar'; 
import Card from './components/Card'; 
import SearchBar from './components/SearchBar'; 
import HistoryTags from './components/HistoryTags';
import Pagination from './components/Pagination'; // Importa el componente de paginación
import { fetchMealsByCategory, fetchMealByName } from './components/api'; 
import PrivateRoute from './components/PrivateRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Canadian');
  const [meals, setMeals] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [searchHistory, setSearchHistory] = useState([]);
  
  const categories = ['Canadian', 'Italian', 'Mexican', 'Indian', 'Chinese'];

  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
    const mealsByCategory = await fetchMealsByCategory(category);
    setMeals(mealsByCategory);
  };

  const handleSearch = async (searchTerm) => {
    const searchedMeals = await fetchMealByName(searchTerm);
    setMeals(searchedMeals);
    
    // Agregar el término de búsqueda al historial (solo las últimas 10)
    setSearchHistory((prevHistory) => [searchTerm, ...prevHistory.slice(0, 9)]);
  };

  useEffect(() => {
    handleCategorySelect(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      <div className="content-container">
        {/* Meals */}
        <div className="meals-container">
          {meals.map((meal) => (
            <Card
              key={meal.idMeal}
              id={meal.idMeal}
              name={meal.strMeal}
              image={meal.strMealThumb}
              rating={meal.rating} //  propiedad en tus datos de platos
              liked={meal.liked} //  propiedad en tus datos de platos
              handleRatingChange={handleRatingChange}
              handleLikeClick={handleLikeClick}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        {/* SearchBar */}
        <SearchBar onSearch={handleSearch} />

        {/* HistoryTags */}
        <HistoryTags history={searchHistory} />
       

        {/* Resto de tu aplicación */}
        <Router>
          <Switch>
            <Route path="/register" component={Register} />
            <Route
              path="/login"
              render={(props) => <Login {...props} setToken={setToken} />}
            />
            <Route path="/logout" render={() => <Logout setToken={setToken} />} />
            <PrivateRoute
              path="/home"
              component={Home}
              token={token}
            />
            {/* Otras rutas */}
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
