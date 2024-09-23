import React, { useContext, useEffect } from "react";
import { FootballFixturesContext } from "../../contexts/footballFixturesContext";
import { TableRow } from "../table-row/table-row.component";
import styles from "./table.module.css";

interface IProps {
  title?: string;
  isGlobalFootball?: boolean;
}

const Table: React.FC<IProps> = ({ title, isGlobalFootball }) => {
  const id: string = "table";
  const { fixtures, isLoading } = useContext(FootballFixturesContext);

  const scrollIntoLive = () => {
    const liveElement = document
      .querySelector(".liveScore")
      ?.getBoundingClientRect();
    window.scroll({ top: liveElement?.top! - 68, behavior: "smooth" });
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

  /* Loop over the tbody count how many forecasts are there and how many have the bgGreen class */
  const tbody = document.querySelector("tbody");
  const tr = tbody ? tbody.querySelectorAll("tr") : [];
  let forecastCount = 0;
  let bgGreenCount = 0;
  tr.forEach((item) => {
    const forecast = item.querySelector(".forecast");
    if (forecast) {
      forecastCount++;
      if (forecast.classList.contains("bgGreen")) bgGreenCount++;
    }
  });

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
              style={{ cursor: "pointer" }}
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
            <th className={styles.center}>Fcast</th>
            <th>Block</th>
            <th className={styles.center}>Flag</th>
          </tr>
        </thead>
        <tbody>
          {isGlobalFootball
            ? fixtures.map((fixtureItem, index) => (
                <TableRow key={index} index={index} fixtureItem={fixtureItem} />
              ))
            : fixtures
                .filter((item) => {
                  const {
                    league: { id },
                  } = item;
                  if (item.odds.length > 0) {
                    if (
                      id === 39 ||
                      id === 40 ||
                      id === 41 ||
                      id === 42 ||
                      id === 43 ||
                      id === 49 ||
                      id === 50 ||
                      id === 51 ||
                      id === 48 ||
                      id === 45 ||
                      id === 140 ||
                      id === 556 ||
                      id === 141 ||
                      id === 135 ||
                      id === 547 ||
                      id === 136 ||
                      id === 78 ||
                      id === 79 ||
                      id === 529 ||
                      id === 61 ||
                      id === 62 ||
                      id === 63 ||
                      id === 66 ||
                      id === 188 ||
                      id === 179 ||
                      id === 180 ||
                      id === 183 ||
                      id === 184 ||
                      id === 103 ||
                      id === 104 ||
                      id === 113 ||
                      id === 114 ||
                      id === 94 ||
                      id === 95 ||
                      id === 119 ||
                      id === 120 ||
                      id === 88 ||
                      id === 245 ||
                      id === 244 ||
                      id === 98 ||
                      id === 99 ||
                      id === 292 ||
                      id === 253 ||
                      id === 219 ||
                      id === 144 ||
                      id === 207 ||
                      id === 197 ||
                      id === 203 ||
                      id === 172 ||
                      id === 71 ||
                      id === 72 ||
                      id === 128 ||
                      id === 129 ||
                      id === 722 ||
                      id === 262 ||
                      id === 263 ||
                      id === 106 ||
                      id === 235 ||
                      id === 2 ||
                      id === 3 ||
                      id === 4
                    )
                      return item;
                  }
                  return null;
                })
                .map((fixtureItem, index) => (
                  <TableRow
                    key={index}
                    index={index}
                    fixtureItem={fixtureItem}
                  />
                ))}
        </tbody>
      </table>
      <p>Win rate: {bgGreenCount / forecastCount} </p>
    </div>
  );
};

export default Table;
