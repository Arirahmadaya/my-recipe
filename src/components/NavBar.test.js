import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';

test('renders NavBar component with My Recipes link', () => {
  render(<NavBar />);

  // recipe
  const myRecipeLink = screen.getByTestId('my-recipe');
  expect(myRecipeLink).toBeInTheDocument();
  expect(myRecipeLink.innerHTML).toBe('My Recipe'); 

  //form search
  const formSearch = screen.getByTestId('form-search');
  expect(formSearch).toBeInTheDocument();
  expect(formSearch).toHaveAttribute('role', 'search');
  
  
});
