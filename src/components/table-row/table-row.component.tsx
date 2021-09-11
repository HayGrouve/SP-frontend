import _ from 'lodash';
import React, { Fragment, useEffect, useState } from 'react';
import { FootballFixturesContextStateType } from '../../types/footballFixtures';

import styles from './table-row.module.css';

interface ITableRowProps {
  index: number;
  fixtureItem: FootballFixturesContextStateType;
}

export const TableRow: React.FC<ITableRowProps> = ({ index, fixtureItem }) => {
  const {
    fixture: { status },
    league: { country, flag, name, logo },
    odds,
    teams,
    score: { fulltime },
    dtd,
    goals,
  } = fixtureItem;

  const [isLive, setIsLive] = useState(false);

  const statusInfo = `${
    status.short === 'FT' || status.short === 'PEN' || status.short === 'AET'
      ? `${_.isNull(fulltime.home) ? '' : fulltime.home} - ${
          _.isNull(fulltime.away) ? '' : fulltime.away
        }`
      : `${status.short}${
          _.isNull(status.elapsed) ? '' : ` - ${status.elapsed}'`
        }`
  }`;

  const scoreStyles = [styles.center, styles.scorePrint];
  const flagStyles = [styles.center, styles.flag];

  useEffect(() => {
    setIsLive(
      status.short === '1H' ||
        status.short === 'HT' ||
        status.short === '2H' ||
        status.short === 'ET'
    );
  }, [status]);

  return (
    <Fragment>
      {dtd.length > 5 && (
        <tr>
          <td colSpan={10} className={styles.date}>
            {dtd.substr(0, 10)}
          </td>
        </tr>
      )}
      <tr className={(index + 1) % 7 === 0 ? styles.line : ''}>
        <td>{index + 1}</td>
        <td>{dtd.length > 6 ? dtd.substr(11, 5) : dtd}</td>
        <td>{teams.home.name}</td>
        <td>{teams.away.name}</td>
        <td className={styles.center}>{odds[0].odd}</td>
        <td className={styles.center}>{odds[1].odd}</td>
        <td className={styles.center}>{odds[2].odd}</td>
        <td className={scoreStyles.join(' ')}>
          {isLive && <div className={styles.loading}></div>}
          {statusInfo}
          {isLive && (
            <span
              className={isLive ? 'liveScore' : ''}
              style={{ display: 'block' }}
            >
              {`${_.isNull(goals.home) ? '0' : goals.home} - ${
                _.isNull(goals.away) ? '0' : goals.away
              }`}
            </span>
          )}
        </td>
        <td>{`${country} - ${name}`}</td>
        <td className={flagStyles.join(' ')}>
          <img
            className={styles.flag}
            src={flag ? flag : logo}
            alt={`Flag of ${country}`}
          />
        </td>
      </tr>
    </Fragment>
  );
};
