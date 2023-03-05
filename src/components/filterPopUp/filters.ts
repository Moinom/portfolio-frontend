export interface Filter {
  tag: string;
  checked: boolean;
  name: string;
}

export const artFilters = [
  { tag: 'art', checked: true, name: 'all' },
  { tag: 'manual', checked: false, name: 'manual' },
  { tag: 'fanart', checked: false, name: 'fanart' },
  { tag: 'digital', checked: false, name: 'digital' },
  { tag: 'inktober_2020', checked: false, name: 'Inktober 2020' },
  { tag: 'inktober_2021', checked: false, name: 'Inktober 2021' },
  { tag: 'inktober_2022', checked: false, name: 'Inktober 2022' },
];
