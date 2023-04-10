import React from 'react';
import Footer from './Footer';
import { render, screen, within } from '../../utils/testUtils';
import userEvent from '@testing-library/user-event';
import App from '../../App';

it('renders footer correctly', () => {
  render(<Footer />);
});

it('contains all the social media links', () => {
  render(<Footer />);
  const socialContainer = screen.getByTestId('socialMedia');
  const links = within(socialContainer).queryAllByRole('link');
  expect(links.length).toEqual(3);
  expect(links[0]).toHaveAttribute(
    'href',
    'https://www.instagram.com/moinomlisa/'
  );
  expect(links[1]).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/lisa-strempel-18a8b6141/'
  );
  expect(links[2]).toHaveAttribute('href', 'mailto:info@lisa-strempel.de');
});

it('contains all the social media icons', () => {
  render(<Footer />);
  const instaIcon = screen.getByTitle('Instagram Icon');
  const linkedInIcon = screen.getByTitle('LinkedIn Icon');
  const emailIcon = screen.getByTitle('Email Icon');
  expect(instaIcon).toBeInTheDocument();
  expect(linkedInIcon).toBeInTheDocument();
  expect(emailIcon).toBeInTheDocument();
});

it('imprint link works correctly', () => {
  render(<App />);
  const imprintLink = screen.getByRole('link', { name: 'Imprint' });
  expect(
    screen.queryByRole('heading', { level: 1, name: 'Imprint' })
  ).not.toBeInTheDocument();
  userEvent.click(imprintLink);
  expect(
    screen.getByRole('heading', { level: 1, name: 'Imprint' })
  ).toBeInTheDocument();
});

it('privacy link works correctly', () => {
  render(<App />);
  const privacyLink = screen.getByRole('link', { name: 'Privacy' });
  expect(
    screen.queryByRole('heading', { level: 1, name: 'Datenschutzerklärung' })
  ).not.toBeInTheDocument();
  userEvent.click(privacyLink);
  expect(
    screen.getByRole('heading', { level: 1, name: 'Datenschutzerklärung' })
  ).toBeInTheDocument();
});
