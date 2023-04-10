import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/mail.svg';
import { ThemeContext, themes } from '../../contexts/ThemeProvider';
import styles from './Footer.module.css';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.iconWrapper} data-testid="socialMedia">
        <a
          href="https://www.instagram.com/moinomlisa/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon
            className={`${styles.socialMediaIcon} ${
              theme === themes.code ? styles.codeStrokeColour : ''
            }`}
            title="Instagram Icon"
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
            title="LinkedIn Icon"
          />
        </a>
        <a href="mailto:info@lisa-strempel.de">
          <EmailIcon
            className={`${styles.socialMediaIcon} ${
              theme === themes.code ? styles.codeStrokeColour : ''
            }`}
            title="Email Icon"
          />
        </a>
      </div>

      <div>
        <Link
          className={`${styles.footerLinks} ${
            theme === themes.code ? styles.codeColour : ''
          }`}
          to={'/imprint'}
        >
          Imprint
        </Link>
        <Link
          className={`${styles.footerLinks} ${
            theme === themes.code ? styles.codeColour : ''
          }`}
          to={'/privacy'}
        >
          Privacy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
