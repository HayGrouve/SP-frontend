import React from 'react';

import styles from './about.module.css';

const About: React.FC = () => {
  const id: string = 'about';
  return (
    <div id={`${id}-container`}>
      <h1 className={styles.heading}>About page</h1>
      <p className={styles.center}>Coming soon</p>
    </div>
  );
};

export default About;
