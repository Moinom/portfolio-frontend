import React from 'react';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <span className={`${styles.themeLabel} ${styles.art}`}>Art</span>
      <ToggleSwitch />
      <span className={`${styles.themeLabel} ${styles.code}`}>Code</span>
    </div>
  );
}

export default Header;
