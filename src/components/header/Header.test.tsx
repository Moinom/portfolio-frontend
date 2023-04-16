import React from 'react';
import Header from './Header';
import { render, screen } from '../../utils/testUtils';
import userEvent from '@testing-library/user-event';
import Routes from '../../router/Routes';
import Footer from '../footer/Footer';

it('renders footer correctly', () => {
  render(<Header />);
});

it('displays correct subtitle', () => {
  render(<Header />);
  const subtitle = screen.getByText('by Lisa');
  expect(subtitle).toBeInTheDocument();
});

it('navigates to home page when clicking Art link', () => {
  render(
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
  const imprintLink = screen.getByRole('link', { name: 'Imprint' });
  userEvent.click(imprintLink);
  expect(screen.queryByTestId('artGallery')).not.toBeInTheDocument();

  const artLink = screen.getByRole('link', { name: '_ Art' });
  userEvent.click(artLink);
  expect(screen.getByTestId('artGallery')).toBeInTheDocument();
});

it('navigates to home page when clicking Code link', () => {
  render(
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
  const imprintLink = screen.getByRole('link', { name: 'Imprint' });
  userEvent.click(imprintLink);
  expect(screen.queryByTestId('codeGallery')).not.toBeInTheDocument();

  const codeLink = screen.getByRole('link', { name: 'Code' });
  userEvent.click(codeLink);
  expect(screen.getByTestId('codeGallery')).toBeInTheDocument();
});
