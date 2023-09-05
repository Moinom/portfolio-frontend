import { Art, Code } from './types';
import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '../contexts/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { Filter } from './filters';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

export const largeMockArt: Art = {
  tags: ['art', 'inktober_2021'],
  title: 'Test title',
  height: 800,
  width: 900,
  url: 'test-url',
};
export const smallMockArt: Art = {
  tags: ['art', 'inktober_2021'],
  title: 'Test title',
  height: 300,
  width: 300,
  url: 'test-url',
};

export const mockCode: Code[] = [
  {
    tags: ['coding', 'website'],
    title: 'Test title',
    description: 'This is a test',
    language: 'test language',
    prod: 'https://lisa-strempel.de',
    github: 'https://github.com/Moinom/portfolio-frontend',
    height: 800,
    width: 900,
    url: 'test-url',
  },
  {
    tags: ['coding', 'website'],
    title: 'Test title',
    description: 'This is a test',
    language: 'test language',
    prod: 'https://lisa-strempel.de',
    github:
      'https://github.com/Moinom/portfolio-frontend,https://github.com/Moinom/portfolio-backend',
    height: 800,
    width: 900,
    url: 'test-url',
  },
];

export const mockFilters: Filter[] = [
  {
    tag: 'all',
    checked: true,
    name: 'Mock Filter All',
  },
  {
    tag: 'mockTag1',
    checked: false,
    name: 'Mock Filter 1',
  },
  {
    tag: 'mockTag2',
    checked: false,
    name: 'Mock Filter 2',
  },
  {
    tag: 'mockTag3',
    checked: false,
    name: 'Mock Filter 3',
  },
];
