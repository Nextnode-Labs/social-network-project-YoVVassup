import { render, screen } from '@testing-library/react';
import VenomContainer from './App';
import React from "react";

test('renders learn react link', () => {
  render(<VenomContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
