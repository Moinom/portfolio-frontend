import React from 'react';
import ArtGallery from './ArtGallery';
import { render, screen } from '../../utils/testUtils';
import userEvent from '@testing-library/user-event';

// TODO: test filter functionality and filter close

describe('Art Gallery Filters', () => {
  it('shows filter the filter icon', () => {
    render(<ArtGallery />);
    const icon = screen.getByTitle('filter');
    expect(icon).toBeInTheDocument();
  });

  it('shows the filter headline', () => {
    render(<ArtGallery />);
    const headline = screen.getByRole('heading', { level: 1, name: 'Filter' });
    expect(headline).toBeInTheDocument();
  });

  it('does not show filter popup by default', () => {
    render(<ArtGallery />);
    const popup = screen.queryByTestId('filterPopUp');
    expect(popup).not.toBeInTheDocument();
  });

  it('does show filter popup after clicking filter icon', () => {
    render(<ArtGallery />);
    userEvent.click(screen.getByTitle('filter'));
    const popup = screen.queryByTestId('filterPopUp');
    expect(popup).toBeInTheDocument();
  });

  it('does show filter popup after clicking filter text', () => {
    render(<ArtGallery />);
    userEvent.click(screen.getByRole('heading', { level: 1, name: 'Filter' }));
    const popup = screen.queryByTestId('filterPopUp');
    expect(popup).toBeInTheDocument();
  });
});
