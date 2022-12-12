import React from 'react';
import { Route, Routes as BrowserRoutes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Imprint from '../pages/imprint/Imprint';
import Privacy from '../pages/privacy/Privacy';

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/imprint" element={<Imprint />} />
      <Route path="/privacy" element={<Privacy />} />
    </BrowserRoutes>
  );
};

export default Routes;
