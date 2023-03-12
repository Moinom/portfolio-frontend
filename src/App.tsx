import React, { useContext, useEffect, useState } from 'react';
import Header from './components/header/Header';
import { ThemeContext, themes } from './contexts/ThemeProvider';
import styles from './App.module.css';
import Footer from './components/footer/Footer';
import Routes from './router/Routes';
import { ReactComponent as ArrowUpCircleIcon } from './assets/icons/arrow-up-circle.svg';

function App() {
  const [buttonVisibility, setButtonVisibility] = useState<boolean>(false);
  const { theme } = useContext(ThemeContext);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleButtonVisibility = () => {
      window.scrollY > 300
        ? setButtonVisibility(true)
        : setButtonVisibility(false);
    };
    window.addEventListener('scroll', handleButtonVisibility);
    return () => window.removeEventListener('scroll', handleButtonVisibility);
  }, []);

  return (
    <div
      className={`${styles.appWrapper} ${
        theme === themes.art ? styles.artColours : styles.codeColours
      }`}
    >
      <Header />
      <Routes />
      <Footer />
      {buttonVisibility && (
        <ArrowUpCircleIcon
          className={`${theme === themes.art && styles.iconCode} ${
            styles.icon
          }`}
          onClick={handleScrollUp}
        />
      )}
    </div>
  );
}

export default App;
