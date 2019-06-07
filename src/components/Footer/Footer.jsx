import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        This app was designed by{' '}
        <a href="https://github.com/KostiaDrobotovych" className={styles.name}>
          Kostia Drobotovych
        </a>
        <span> in 2019</span>
      </p>
    </footer>
  );
};

export default Footer;
