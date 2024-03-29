import React, { useContext } from 'react';
import { ThemeContext, themes } from '../../contexts/ThemeProvider';
import styles from './ToggleSwitch.module.css';

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.toggleSwitchWrapper} ${
        theme === themes.art ? styles.artColours : styles.codeColours
      }`}
      onClick={toggleTheme}
      data-testid="switch"
    >
      <div
        className={`${styles.notch} ${
          theme === themes.code && styles.codeSwitch
        }`}
      />
    </div>
  );
};

export default ToggleSwitch;
