import React from 'react';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.switchWrapper}>
        <Link to={'/'} className={styles.link}>
          <span className={`${styles.themeLabel} ${styles.art}`}>
            <span id={styles.blocker}>_</span>Art
          </span>
        </Link>
        <ToggleSwitch />
        <Link to={'/'} className={styles.link}>
          <span className={`${styles.themeLabel} ${styles.code}`}>Code</span>
        </Link>
      </div>
      <span className={styles.subTitle}>by Lisa</span>
    </div>
  );
}

export default Header;
