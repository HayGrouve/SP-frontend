import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './navigation.module.css';

const Navigation: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const id: string = 'navigation';
  return (
    <nav id={`${id}-container`} className={styles.navbar}>
      <div className={styles.brandTitle}>
        <Link to="/">Sport Predict</Link>
      </div>
      <span
        className={styles.toggleButton}
        onClick={() => setIsMobileView(!isMobileView)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </span>
      <div className={`${isMobileView && styles.active} ${styles.navbarLinks}`}>
        <ul>
          <li onClick={() => setIsMobileView(!isMobileView)}>
            <Link to="/">Our Football</Link>
          </li>
          <li onClick={() => setIsMobileView(!isMobileView)}>
            <Link to="/football/global">Global Football</Link>
          </li>
          <li onClick={() => setIsMobileView(!isMobileView)}>
            <Link to="/history">History</Link>
          </li>
          <li onClick={() => setIsMobileView(!isMobileView)}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
