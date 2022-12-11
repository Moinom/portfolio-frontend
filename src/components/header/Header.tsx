import React from 'react';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.switchWrapper}>
        <span className={`${styles.themeLabel} ${styles.art}`}>Art</span>
        <ToggleSwitch />
        <span className={`${styles.themeLabel} ${styles.code}`}>Code</span>
      </div>
      <span className={styles.subTitle}>by Lisa</span>
    </div>
  );
}

export default Header;
