import React from 'react';
import FilterPopUp from './FilterPopUp';
import { mockFilters, render, screen } from '../../utils/testUtils';

it('renders popup correctly', () => {
  const mockFunction = jest.fn();
  render(
    <FilterPopUp
      updateFilter={mockFunction}
      filters={mockFilters}
      togglePopupVisibility={mockFunction}
    />
  );
});

it('renders close icon correctly', () => {
  const mockFunction = jest.fn();
  render(
    <FilterPopUp
      updateFilter={mockFunction}
      filters={mockFilters}
      togglePopupVisibility={mockFunction}
    />
  );
  const closeIcon = screen.getByTitle('close icon');
  expect(closeIcon).toBeInTheDocument();
});

it('shows all filter options', () => {
  const mockFunction = jest.fn();
  render(
    <FilterPopUp
      updateFilter={mockFunction}
      filters={mockFilters}
      togglePopupVisibility={mockFunction}
    />
  );
  const filterList = screen.getByRole('list');
  expect(filterList.childNodes.length).toEqual(mockFilters.length + 1);

  const checkboxes = screen.queryAllByRole('checkbox');
  expect(checkboxes[0]).toBeChecked();
  expect(checkboxes[0]).toHaveAttribute('name', mockFilters[0].tag);

  for (let i = 0; i < checkboxes.length; i++) {
    if (i === 0) continue;
    const box = checkboxes[i];
    expect(box).not.toBeChecked();
    expect(box).toHaveAttribute('name', mockFilters[i].tag);
  }
});
