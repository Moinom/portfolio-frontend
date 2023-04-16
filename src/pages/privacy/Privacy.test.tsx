import React from 'react';
import Privacy from './Privacy';
import { render, screen } from '../../utils/testUtils';

it('renders privacy page correctly', () => {
  render(<Privacy />);
});

it('renders headlines correctly', () => {
  render(<Privacy />);
  const h1 = screen.getByRole('heading', {
    level: 1,
    name: 'Datenschutzerklärung',
  });
  expect(h1).toBeInTheDocument();
  const h2 = screen.getByRole('heading', {
    level: 2,
    name: 'Inhaltsübersicht',
  });
  expect(h2).toBeInTheDocument();
});
