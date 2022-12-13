import React, { useContext } from 'react';
import ArtGallery from '../../components/artGallery/ArtGallery';
import { ThemeContext, themes } from '../../contexts/ThemeProvider';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return <>{theme === themes.art ? <ArtGallery /> : <section>code</section>}</>;
};

export default Home;
