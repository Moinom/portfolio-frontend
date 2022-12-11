import React, { useContext } from 'react';
import Header from './components/header/Header';
import { ThemeContext, themes } from './contexts/ThemeProvider';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`app-wrapper ${
        theme === themes.art ? 'art-colours' : 'code-colours'
      }`}
    >
      <Header />
    </div>
  );
}

export default App;
