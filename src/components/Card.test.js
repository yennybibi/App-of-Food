

import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/Card'; 

test('renders card with meal name', () => {
  const meal = {
    idMeal: '1',
    strMeal: 'Pizza',
    // ... otras propiedades del meal
  };

  const { getByText } = render(<Card meal={meal} />);
  const mealNameElement = getByText(/Pizza/i);
  expect(mealNameElement).toBeInTheDocument();
});
