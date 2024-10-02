import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

const el = {
  image: 'https://via.placeholder.com/150',
  name: 'Test Recipe',
  rating: 4.5,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  id: 1
};

test('renders the Card component with props', async () => {
  render(<Card el={el} />);
  
  // Test image
  const img = await screen.findByTestId(`img-recipe-${el.id}`);
  expect(img).toHaveAttribute('src', el.image);
  expect(img).toHaveAttribute('alt', el.name);
  
  //title 
  expect(screen.getByTestId(`title-recipe-${el.id}`).innerHTML).toBe(el.name);

  //rating
  expect(screen.getByTestId(`rating-recipe-${el.id}`).innerHTML).toBe(el.rating.toString());
  

  // Test link
  expect(screen.getByTestId(`link-recipe-${el.id}`)).toHaveAttribute('href', `https://dummyjson.com/recipes/${el.id}`);
});
