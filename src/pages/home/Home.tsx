import React, { useContext } from 'react';
import ArtGallery from '../../components/artGallery/ArtGallery';
import { ThemeContext, themes } from '../../contexts/ThemeProvider';
import CodeGallery from '../../components/codeGallery/CodeGallery';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return theme === themes.art ? <ArtGallery /> : <CodeGallery />;
};

export default Home;
