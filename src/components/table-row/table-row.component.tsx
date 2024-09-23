import _ from "lodash";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { FootballFixturesContextStateType } from "../../types/footballFixtures";
import PredictionsModal from "../predictions-modal/predictionsModal.component";

import styles from "./table-row.module.css";
import { rowForecastMap } from "../../utils/combineContextProviders";
import { FootballFixturesContext } from "../../contexts/footballFixturesContext";

interface ITableRowProps {
  index: number;
  fixtureItem: FootballFixturesContextStateType;
}

export const TableRow: React.FC<ITableRowProps> = ({ index, fixtureItem }) => {
  const {
    fixture: { status, id },
    league: { country, flag, name, logo },
    odds,
    teams,
    score: { fulltime },
    dtd,
    goals,
  } = fixtureItem;

  const { incrementTotalCorrectForecasts, incrementTotalForecasts } =
    useContext(FootballFixturesContext);

  const [isLive, setIsLive] = useState(false);
  const [predictionsModalData, setPredictionsModalData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getPrediction = async (
    e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>
  ) => {
    const response = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/predictions?fixture=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key":
            "8c8198bc3fmsh1b23c461c94ca05p19e3c9jsn07c842ff0389",
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
      }
    );
    const fixtures = await response.json();
    const data = await {
      ...fixtures.response[0].predictions.winner,
      ...fixtures.response[0].predictions.percent,
      x: e.pageX,
      y: e.pageY,
    };
    setPredictionsModalData(data);
    setIsModalOpen(true);
  };

  const statusInfo = `${
    status.short === "FT" || status.short === "PEN" || status.short === "AET"
      ? `${_.isNull(fulltime.home) ? goals.home : fulltime.home} - ${
          _.isNull(fulltime.away) ? goals.away : fulltime.away
        }`
      : `${status.short}${
          _.isNull(status.elapsed) ? "" : ` - ${status.elapsed}'`
        }`
  }`;

  const scoreStyles = [styles.center, styles.scorePrint];
  const flagStyles = [styles.center, styles.flag];
  const forecastStyles = [styles.center, styles.forecast];

  rowForecastMap.forEach((item) => {
    if (
      (item.rowNumber === index + 1 &&
        goals.home !== null &&
        goals.away !== null) ||
      (item.rowNumber + 175 === index + 1 &&
        goals.home !== null &&
        goals.away !== null)
    ) {
      incrementTotalForecasts();
      switch (item.forecast) {
        case "1/X":
          if (goals.home > goals.away || goals.home === goals.away) {
            forecastStyles.push(styles.bgGreen);
            incrementTotalCorrectForecasts();
          } else {
            forecastStyles.push(styles.bgRed);
          }
          break;
        case "X/2":
          if (goals.home < goals.away || goals.home === goals.away) {
            forecastStyles.push(styles.bgGreen);
            incrementTotalCorrectForecasts();
          } else {
            forecastStyles.push(styles.bgRed);
          }
          break;
        case "1/2":
          if (goals.home > goals.away || goals.home < goals.away) {
            forecastStyles.push(styles.bgGreen);
            incrementTotalCorrectForecasts();
          } else {
            forecastStyles.push(styles.bgRed);
          }
          break;
        default:
          break;
      }
    }
  });

  useEffect(() => {
    setIsLive(
      status.short === "1H" ||
        status.short === "HT" ||
        status.short === "2H" ||
        status.short === "ET"
    );
  }, [status]);

  return (
    <Fragment>
      {isModalOpen && (
        <PredictionsModal close={setIsModalOpen} data={predictionsModalData} />
      )}
      {dtd.length > 5 && (
        <tr>
          <td colSpan={11} className={styles.date}>
            {dtd.substr(0, 10)}
          </td>
        </tr>
      )}
      <tr className={(index + 1) % 7 === 0 ? styles.line : ""}>
        <td>{index + 1}</td>
        <td>{dtd.length > 6 ? dtd.substr(11, 5) : dtd}</td>
        <td>{teams.home.name}</td>
        <td>{teams.away.name}</td>
        <td className={styles.center}>
          {odds.length > 0 && odds[0] ? odds[0].odd : "-"}
        </td>
        <td className={styles.center}>
          {odds.length > 0 && odds[1] ? odds[1].odd : "-"}
        </td>
        <td className={styles.center}>
          {odds.length > 0 && odds[2] ? odds[2].odd : "-"}
        </td>
        <td className={scoreStyles.join(" ")}>
          {isLive && <div className={styles.loading}></div>}
          {statusInfo}
          {isLive && (
            <span
              className={isLive ? "liveScore" : ""}
              style={{ display: "block" }}
            >
              {`${_.isNull(goals.home) ? "0" : goals.home} - ${
                _.isNull(goals.away) ? "0" : goals.away
              }`}
            </span>
          )}
        </td>
        <td className={forecastStyles.join(" ")}>
          {rowForecastMap.map((item) => {
            if (item.rowNumber === index + 1) {
              return <span key={item.rowNumber}>{item.forecast}</span>;
            } else if (item.rowNumber + 175 === index + 1) {
              return <span key={item.rowNumber + 175}>{item.forecast}</span>;
            }
            return null;
          })}
        </td>
        <td className={styles.scorePrint}>{`${country} - ${name}`}</td>
        <td onClick={(e) => getPrediction(e)} className={flagStyles.join(" ")}>
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
