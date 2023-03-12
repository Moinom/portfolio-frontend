export interface Filter {
  tag: string;
  checked: boolean;
  name: string;
}

export const artFilters = [
  { tag: 'art', checked: true, name: 'All' },
  { tag: 'manual', checked: false, name: 'Manual' },
  { tag: 'fanart', checked: false, name: 'Fanart' },
  { tag: 'digital', checked: false, name: 'Digital' },
  { tag: 'inktober_2020', checked: false, name: 'Inktober 2020' },
  { tag: 'inktober_2021', checked: false, name: 'Inktober 2021' },
  { tag: 'inktober_2022', checked: false, name: 'Inktober 2022' },
];

export const codeFilters = [
  { tag: 'coding', checked: true, name: 'All' },
  { tag: 'website', checked: false, name: 'Website' },
  { tag: 'javascript', checked: false, name: 'Javascript' },
  { tag: 'typescript', checked: false, name: 'Typescript' },
  { tag: 'react.js', checked: false, name: 'React.js' },
  { tag: 'discord_bot', checked: false, name: 'Discord Bot' },
  { tag: 'game', checked: false, name: 'Game' },
];
