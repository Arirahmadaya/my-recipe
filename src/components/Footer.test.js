import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component', () => {
  render(<Footer />);

  // Test for footer text
  const footerText = screen.getByTestId('footer-text');
  expect(footerText.innerHTML).toBe('© 2024 Company, Inc. All rights reserved.');

  // Test href
  const linkFacebook = screen.getByTestId('link-facebook');
  expect(linkFacebook).toHaveAttribute('href', 'https://facebook.com');

  const linkX = screen.getByTestId('link-x');
  expect(linkX).toHaveAttribute('href', 'https://x.com');

  const linkInstagram = screen.getByTestId('link-instagram');
  expect(linkInstagram).toHaveAttribute('href', 'https://instagram.com/');
});
