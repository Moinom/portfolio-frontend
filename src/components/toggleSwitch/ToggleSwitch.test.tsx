import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import { render, screen } from '../../utils/testUtils';
import userEvent from '@testing-library/user-event';
import Routes from '../../router/Routes';

it('renders the toggle switch correctly', () => {
  render(<ToggleSwitch />);
});

it('toggles theme on click', () => {
  render(
    <>
      <ToggleSwitch />
      <Routes />
    </>
  );
  const toggle = screen.getByTestId('switch');
  expect(screen.getByTestId('artGallery')).toBeInTheDocument();
  expect(screen.queryByTestId('codeGallery')).not.toBeInTheDocument();

  userEvent.click(toggle);

  expect(screen.getByTestId('codeGallery')).toBeInTheDocument();
  expect(screen.queryByTestId('artGallery')).not.toBeInTheDocument();
});
