import React from 'react';
import ArtCard from './ArtCard';
import {
  smallMockArt,
  largeMockArt,
  render,
  screen,
  within,
} from '../../utils/testUtils';
import userEvent from '@testing-library/user-event';

describe('preview card', () => {
  it('shows correct title', () => {
    render(<ArtCard art={smallMockArt} desktopView={true} />);
    const layoverTitle = screen.getByRole('heading', {
      level: 3,
      name: smallMockArt.title!,
    });
    expect(layoverTitle).toBeInTheDocument();
  });
  it('shows image correctly', () => {
    render(<ArtCard art={smallMockArt} desktopView={true} />);
    const image = screen.getByAltText(smallMockArt.title!);
    expect(image).toBeInTheDocument();
  });
  it('queries small image in the correct size', () => {
    render(<ArtCard art={smallMockArt} desktopView={true} />);
    const image = screen.getByAltText(smallMockArt.title!);
    expect(image).toHaveAttribute('src', largeMockArt.url);
  });
  it('queries large image in the correct size', () => {
    render(<ArtCard art={largeMockArt} desktopView={true} />);
    const image = screen.getByAltText(largeMockArt.title!);
    expect(image).toHaveAttribute('src', `${largeMockArt.url}/tr:w-400`);
  });
});

describe('fullsize', () => {
  it('shows fullsize for desktop if clicked', () => {
    render(<ArtCard art={smallMockArt} desktopView={true} />);
    userEvent.click(screen.getByTestId('previewWrapper'));
    const { getByText } = within(screen.getByTestId('fullsizeWrapper'));
    expect(getByText(smallMockArt.title!)).toBeInTheDocument();
  });
  it('does not shows fullsize for desktop if not clicked', () => {
    render(<ArtCard art={smallMockArt} desktopView={true} />);
    const fullSizeWrapper = screen.queryByTestId('fullsizeWrapper');
    expect(fullSizeWrapper).not.toBeInTheDocument();
  });
  it('does not show fullsize for mobile', () => {
    render(<ArtCard art={smallMockArt} desktopView={false} />);
    userEvent.click(screen.getByTestId('previewWrapper'));
    const fullSizeWrapper = screen.queryByTestId('fullsizeWrapper');
    expect(fullSizeWrapper).not.toBeInTheDocument();
  });
  it('queries small image in the correct size', () => {
    render(<ArtCard art={smallMockArt} desktopView={true} />);
    userEvent.click(screen.getByTestId('previewWrapper'));
    const { getByAltText } = within(screen.getByTestId('fullsizeWrapper'));
    const image = getByAltText(smallMockArt.title!);
    expect(image).toHaveAttribute('src', largeMockArt.url);
  });
  it('queries large image in the correct size', () => {
    render(<ArtCard art={largeMockArt} desktopView={true} />);
    userEvent.click(screen.getByTestId('previewWrapper'));
    const { getByAltText } = within(screen.getByTestId('fullsizeWrapper'));
    const image = getByAltText(smallMockArt.title!);
    expect(image).toHaveAttribute('src', `${largeMockArt.url}/tr:w-800`);
  });
  it('has close icon', () => {
    render(<ArtCard art={largeMockArt} desktopView={true} />);
    userEvent.click(screen.getByTestId('previewWrapper'));
    const closeIcon = screen.getByTitle('close');
    expect(closeIcon).toBeInTheDocument();
  });
});
