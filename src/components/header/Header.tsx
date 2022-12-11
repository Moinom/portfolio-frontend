import React from 'react';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <span>Art</span>
      <ToggleSwitch />
      <span>Code</span>
    </div>
  );
}

export default Header;
