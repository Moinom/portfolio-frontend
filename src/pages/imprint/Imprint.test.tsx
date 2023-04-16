import React from 'react';
import Imprint from './Imprint';
import { render, screen } from '../../utils/testUtils';

it('renders imprint page correctly', () => {
  render(<Imprint />);
});

it('renders correct text', () => {
  render(<Imprint />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'Imprint' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 2, name: 'Angaben gemäß § 5 TMG' })
  ).toBeInTheDocument();
  expect(screen.getByTestId('address').textContent).toMatch(
    'Lisa StrempelLuruper Hauptstraße 21022547 Hamburg'
  );
  expect(screen.getByText('Email:')).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: 'info@lisa-strempel.de' })
  ).toHaveAttribute('href', 'mailto:info@lisa-strempel.de');
});
