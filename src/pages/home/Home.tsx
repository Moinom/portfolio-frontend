import React, { useContext, useEffect, useState } from 'react';
import ArtGallery from '../../components/artGallery/ArtGallery';
import { ThemeContext, themes } from '../../contexts/ThemeProvider';
import { ReactComponent as ArrowUpCircleIcon } from '../../assets/icons/arrow-up-circle.svg';
import styles from './Home.module.css';
import CodeGallery from '../../components/codeGallery/CodeGallery';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [buttonVisibility, setButtonVisibility] = useState<boolean>(false);

  useEffect(() => {
    const handleButtonVisibility = () => {
      window.scrollY > 300
        ? setButtonVisibility(true)
        : setButtonVisibility(false);
    };
    window.addEventListener('scroll', handleButtonVisibility);
    return () => window.removeEventListener('scroll', handleButtonVisibility);
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {theme === themes.art ? <ArtGallery /> : <CodeGallery />}
      {buttonVisibility && (
        <ArrowUpCircleIcon
          className={`${theme === themes.art && styles.iconCode} ${
            styles.icon
          }`}
          onClick={handleScrollUp}
        />
      )}
    </>
  );
};

export default Home;
