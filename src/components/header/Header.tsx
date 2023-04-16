import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import styles from './Header.module.css';
import { ThemeContext, themes } from '../../contexts/ThemeProvider';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  function artToggle() {
    theme !== themes.art && toggleTheme();
  }
  function codeToggle() {
    theme !== themes.code && toggleTheme();
  }

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.switchWrapper}>
        <Link to={'/'} className={styles.link} onClick={artToggle}>
          <span className={`${styles.themeLabel} ${styles.art}`}>
            <span id={styles.blocker}>_</span>Art
          </span>
        </Link>
        <ToggleSwitch />
        <Link to={'/'} className={styles.link} onClick={codeToggle}>
          <span className={`${styles.themeLabel} ${styles.code}`}>Code</span>
        </Link>
      </div>
      <span className={styles.subTitle}>by Lisa</span>
    </div>
  );
}

export default Header;
