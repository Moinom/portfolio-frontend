import React from 'react';
import CodeCard from './CodeCard';
import {
  cleanup,
  mockCode,
  render,
  screen,
  within,
} from '../../utils/testUtils';

it('renders code card correctly', () => {
  mockCode.forEach((mock) => {
    render(<CodeCard {...mock} />);

    cleanup();
  });
});

it('has the correct title', () => {
  mockCode.forEach((mock) => {
    render(<CodeCard {...mock} />);
    const headline = screen.getByRole('heading', {
      level: 2,
      name: mock.title,
    });
    expect(headline).toBeInTheDocument();

    cleanup();
  });
});

it('has the correct thumbnail', () => {
  mockCode.forEach((mock) => {
    render(<CodeCard {...mock} />);
    const thumbnail = screen.getByAltText(mock.title!);
    expect(thumbnail).toBeInTheDocument();

    cleanup();
  });
});

it('has the correct thumbnail size - small image', () => {
  mockCode.forEach((mock) => {
    const mockCodeCopy = { ...mock };
    mockCodeCopy.width = 300;
    render(<CodeCard {...mockCodeCopy} />);
    const thumbnail = screen.getByAltText(mock.title!);
    expect(thumbnail).toHaveAttribute('src', `${mock.url}`);

    cleanup();
  });
});

it('has the correct thumbnail size - big image', () => {
  mockCode.forEach((mock) => {
    render(<CodeCard {...mock} />);
    const thumbnail = screen.getByAltText(mock.title!);
    expect(thumbnail).toHaveAttribute('src', `${mock.url}/tr:w-400`);

    cleanup();
  });
});

it('has the correct tech stack', () => {
  mockCode.forEach((mock) => {
    render(<CodeCard {...mock} />);
    const techStackContainer = screen.getByTestId('techStack');
    const stackText = mock
      .language!.split(',')
      .map((tech) => tech.substring(0, 1).toUpperCase() + tech.substring(1))
      .join(', ');
    const description = within(techStackContainer).getByText('Tech stack:');
    const stack = within(techStackContainer).getByText(stackText);
    expect(description).toBeInTheDocument();
    expect(stack).toBeInTheDocument();

    cleanup();
  });
});

it('has correct link text and icons', () => {
  mockCode.forEach((mock) => {
    render(<CodeCard {...mock} />);
    const links = screen.queryAllByRole('link', {});
    links.forEach((element, index) => {
      let textContent =
        index === 0
          ? 'Check it out'
          : index === 1
          ? 'View Portfolio Frontend on Github'
          : 'View Portfolio Backend on Github';
      expect(element).toHaveTextContent(textContent);
      expect(element).toHaveAttribute(
        'href',
        index === 0 ? mock.prod : mock.github?.split(',')[index - 1]
      );
      const arrow = within(element).getByTitle('arrow right');
      expect(arrow).toBeInTheDocument();
    });
    cleanup();
  });
});

it('does not have prod link if not available', () => {
  mockCode.forEach((mock) => {
    const mockCodeCopy = { ...mock };
    mockCodeCopy.prod = undefined;
    render(<CodeCard {...mockCodeCopy} />);
    const links = screen.queryAllByRole('link', {});
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link, index) => {
      expect(link).toHaveTextContent(
        index === 0
          ? 'View Portfolio Frontend on Github'
          : 'View Portfolio Backend on Github'
      );
      expect(link).toHaveAttribute('href', mock.github?.split(',')[index]);
    });
    cleanup();
  });
});
