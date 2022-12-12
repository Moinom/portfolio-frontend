import React, { useContext } from 'react';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/mail.svg';
import { ThemeContext, themes } from '../../contexts/ThemeProvider';
import styles from './Footer.module.css';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.footerWrapper}>
      <div>
        <a
          href="https://www.instagram.com/moinomlisa/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon
            className={`${styles.socialMediaIcon} ${
              theme === themes.code ? styles.codeStrokeColour : ''
            }`}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/lisa-strempel-18a8b6141/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon
            className={`${styles.socialMediaIcon} ${
              theme === themes.code ? styles.codeStrokeColour : ''
            }`}
          />
        </a>
        <a href="mailto:info@lisa-strempel.de">
          <EmailIcon
            className={`${styles.socialMediaIcon} ${
              theme === themes.code ? styles.codeStrokeColour : ''
            }`}
          />
        </a>
      </div>

      <div>
        <a
          className={`${styles.footerLinks} ${
            theme === themes.code ? styles.codeColour : ''
          }`}
          href="#"
        >
          Impressum
        </a>
        <a
          className={`${styles.footerLinks} ${
            theme === themes.code ? styles.codeColour : ''
          }`}
          href="#"
        >
          Datenschutz
        </a>
      </div>
    </div>
  );
};

export default Footer;
