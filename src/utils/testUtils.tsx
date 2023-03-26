import { Art, Code } from './types';
import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '../contexts/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

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

export const mockCode: Code = {
  tags: ['coding', 'website'],
  title: 'Test title',
  description: 'This is a test',
  language: 'test language',
  prod: 'test prod link',
  github: 'test github link',
  height: 800,
  width: 900,
  url: 'test-url',
};