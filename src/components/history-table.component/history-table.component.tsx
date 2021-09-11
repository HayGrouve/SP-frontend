import React from 'react';

import styles from './history-table.module.css';

const HistoryTable: React.FC = () => {
  const id: string = 'historyTable';
  return (
    <div id={`${id}-container`}>
      <h1 className={styles.heading}>History page</h1>
      <p className={styles.center}>Coming soon</p>
    </div>
  );
};

export default HistoryTable;
