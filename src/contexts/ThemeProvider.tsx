import React, { createContext, useState } from 'react';

export const themes = {
  art: 'art',
  code: 'code',
};

interface Theme {
  theme: string;
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<Theme>({} as Theme);

const ThemeProvider: React.FC<Props> = (props) => {
  const [theme, setTheme] = useState<string>(themes.art);
  const toggleTheme = () => {
    theme === themes.art ? setTheme(themes.code) : setTheme(themes.art);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
