import React, { useContext, useEffect, useState } from 'react';
import { FootballFixturesContext } from '../../contexts/footballFixturesContext';
import { FootballFixturesContextStateType } from '../../types/footballFixtures';
import styles from './table.module.css';

interface IProps {
  title?: string;
}

const Table: React.FC<IProps> = ({ title }) => {
  const id: string = 'table';
  const { fixtures, setFootballFixtures } = useContext(FootballFixturesContext);

  const [localFixtures, setLocalFixtures] =
    useState<FootballFixturesContextStateType[]>(fixtures);
  const [isLoading, setIsLoading] = useState(false);

  const sortFixtures = (fixtures: FootballFixturesContextStateType[]) => {
    return [...fixtures].sort(function (a, b) {
      if (a.fixture.timestamp < b.fixture.timestamp) return -1;
      if (a.fixture.timestamp > b.fixture.timestamp) return 1;
      if (a.fixture.id < b.fixture.id) return -1;
      if (a.fixture.id > b.fixture.id) return 1;
      return 0;
    });
  };

  const scrollIntoLive = () => {
    const liveElement = document
      .querySelector('.liveScore')
      ?.getBoundingClientRect();
    window.scroll({ top: liveElement?.top! - 68, behavior: 'smooth' });
  };

  const requestGetFootballFixtures = async () => {
    setIsLoading(true);
    const response = await fetch('https://sportpredictapi.herokuapp.com/');
    const fixtures = await response.json();
    setFootballFixtures(fixtures);
    setLocalFixtures(sortFixtures(fixtures));
    setIsLoading(false);
  };

  useEffect(() => {
    requestGetFootballFixtures();
  }, []);

  console.log(localFixtures);

  return (
    <div id={`${id}-container`}>
      <div className={styles.container}>
        <h1>{title}</h1>
        {isLoading && (
          <div className={styles.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
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
          {/* {sortedFixtures.map((fixtureItem, index) => {
            return (
              <TableRow key={index} index={index} fixtureItem={fixtureItem} />
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
