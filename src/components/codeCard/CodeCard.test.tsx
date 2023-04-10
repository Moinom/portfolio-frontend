import React from 'react';
import CodeCard from './CodeCard';
import { mockCode, render, screen, within } from '../../utils/testUtils';

it('renders code card correctly', () => {
  render(<CodeCard {...mockCode} />);
});

it('has the correct title', () => {
  render(<CodeCard {...mockCode} />);
  const headline = screen.getByRole('heading', {
    level: 2,
    name: mockCode.title,
  });
  expect(headline).toBeInTheDocument();
});

it('has the correct thumbnail', () => {
  render(<CodeCard {...mockCode} />);
  const thumbnail = screen.getByAltText(mockCode.title!);
  expect(thumbnail).toBeInTheDocument();
});

it('has the correct thumbnail size - small image', () => {
  const mockCodeCopy = { ...mockCode };
  mockCodeCopy.width = 300;
  render(<CodeCard {...mockCodeCopy} />);
  const thumbnail = screen.getByAltText(mockCode.title!);
  expect(thumbnail).toHaveAttribute('src', `${mockCode.url}`);
});

it('has the correct thumbnail size - big image', () => {
  render(<CodeCard {...mockCode} />);
  const thumbnail = screen.getByAltText(mockCode.title!);
  expect(thumbnail).toHaveAttribute('src', `${mockCode.url}/tr:w-400`);
});

it('has the correct tech stack', () => {
  render(<CodeCard {...mockCode} />);
  const techStackContainer = screen.getByTestId('techStack');
  const stackText = mockCode
    .language!.split(',')
    .map((tech) => tech.substring(0, 1).toUpperCase() + tech.substring(1))
    .join(', ');
  const description = within(techStackContainer).getByText('Tech stack:');
  const stack = within(techStackContainer).getByText(stackText);
  expect(description).toBeInTheDocument();
  expect(stack).toBeInTheDocument();
});

it('has correct link text and icons', () => {
  render(<CodeCard {...mockCode} />);
  const links = screen.queryAllByRole('link', {});
  links.forEach((element, index) => {
    let textContent = index === 0 ? 'Check it out' : 'View on Github';
    expect(element).toHaveTextContent(textContent);
    expect(element).toHaveAttribute(
      'href',
      index === 0 ? mockCode.prod : mockCode.github
    );
    const arrow = within(element).getByTitle('arrow right');
    expect(arrow).toBeInTheDocument();
  });
});

it('does not have prod link if not available', () => {
  const mockCodeCopy = { ...mockCode };
  mockCodeCopy.prod = undefined;
  render(<CodeCard {...mockCodeCopy} />);
  const links = screen.queryAllByRole('link', {});
  expect(links.length).toEqual(1);
  expect(links[0]).toHaveTextContent('View on Github');
  expect(links[0]).toHaveAttribute('href', mockCode.github);
});
