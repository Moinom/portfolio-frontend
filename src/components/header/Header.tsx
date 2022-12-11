import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider';

function Header() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Header;
