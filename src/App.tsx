import React, { useContext } from 'react';
import Header from './components/header/Header';
import { ThemeContext, themes } from './contexts/ThemeProvider';
import styles from './App.module.css';
import Footer from './components/footer/Footer';
import Routes from './router/Routes';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.appWrapper} ${
        theme === themes.art ? styles.artColours : styles.codeColours
      }`}
    >
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
