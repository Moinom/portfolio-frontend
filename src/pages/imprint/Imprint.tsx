import React from 'react';
import styles from './Imprint.module.css';

const Imprint = () => {
  return (
    <div className={styles.imprintWrapper}>
      <h1>Imprint</h1>
      <h2>Angaben gemäß § 5 TMG</h2>
      <p data-testid="address">
        Lisa Strempel
        <br />
        Westpreußenweg 3
        <br />
        66346 Püttlingen
        <br />
      </p>
      <p>
        Email: <a href="mailto:info@lisa-strempel.de">info@lisa-strempel.de</a>
      </p>
    </div>
  );
};

export default Imprint;
