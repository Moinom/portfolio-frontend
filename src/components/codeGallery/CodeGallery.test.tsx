import React from 'react';
import CodeGallery from './CodeGallery';
import { render, screen } from '../../utils/testUtils';
import userEvent from '@testing-library/user-event';

// TODO: test filter functionality and filter close

describe('Code Gallery Filters', () => {
  it('shows filter the filter icon', () => {
    render(<CodeGallery />);
    const icon = screen.getByTitle('filter');
    expect(icon).toBeInTheDocument();
  });

  it('shows the filter headline', () => {
    render(<CodeGallery />);
    const headline = screen.getByRole('heading', { level: 1, name: 'Filter' });
    expect(headline).toBeInTheDocument();
  });

  it('does not show filter popup by default', () => {
    render(<CodeGallery />);
    const popup = screen.queryByTestId('filterPopUp');
    expect(popup).not.toBeInTheDocument();
  });

  it('does show filter popup after clicking filter icon', () => {
    render(<CodeGallery />);
    userEvent.click(screen.getByTitle('filter'));
    const popup = screen.queryByTestId('filterPopUp');
    expect(popup).toBeInTheDocument();
  });

  it('does show filter popup after clicking filter text', () => {
    render(<CodeGallery />);
    userEvent.click(screen.getByRole('heading', { level: 1, name: 'Filter' }));
    const popup = screen.queryByTestId('filterPopUp');
    expect(popup).toBeInTheDocument();
  });
});
