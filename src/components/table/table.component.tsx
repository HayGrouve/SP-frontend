import React, { useContext, useEffect } from 'react';
import { FootballFixturesContext } from '../../contexts/footballFixturesContext';
import { TableRow } from '../table-row/table-row.component';
import styles from './table.module.css';

interface IProps {
  title?: string;
}

const Table: React.FC<IProps> = ({ title }) => {
  const id: string = 'table';
  const { fixtures, isLoading } = useContext(FootballFixturesContext);

  const scrollIntoLive = () => {
    const liveElement = document
      .querySelector('.liveScore')
      ?.getBoundingClientRect();
    window.scroll({ top: liveElement?.top! - 68, behavior: 'smooth' });
  };

  useEffect(() => {
    console.log(fixtures);
  }, [fixtures]);

  if (isLoading.isFirstComponentMount)
    return (
      <div>
        <h1>{title}</h1>
        <div className={styles.ldsRing}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );

  return (
    <div id={`${id}-container`}>
      <div className={styles.container}>
        <h1>{title}</h1>
        <button className={styles.liveButton} onClick={() => scrollIntoLive()}>
          <div className={styles.loading}></div>
          LiveScore
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th
              style={{ cursor: 'pointer' }}
              onClick={() => {
                window.print();
              }}
            >
              #
            </th>
            <th>Time</th>
            <th>Home</th>
            <th>Away</th>
            <th className={styles.center}>1</th>
            <th className={styles.center}>X</th>
            <th className={styles.center}>2</th>
            <th className={styles.center}>Score</th>
            <th>Block</th>
            <th className={styles.center}>Flag</th>
          </tr>
        </thead>
        <tbody>
          {fixtures.map((fixtureItem, index) => {
            return (
              <TableRow key={index} index={index} fixtureItem={fixtureItem} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
