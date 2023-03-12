import React from 'react';
import styles from './Imprint.module.css';

const Imprint = () => {
  return (
    <div className={styles.imprintWrapper}>
      <h1>Imprint</h1>
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Lisa Strempel
        <br />
        Luruper Hauptstraße 210
        <br />
        22547 Hamburg
        <br />
      </p>
      <p>
        Email: <a href="mailto:info@lisa-strempel.de">info@lisa-strempel.de</a>
      </p>
    </div>
  );
};

export default Imprint;
