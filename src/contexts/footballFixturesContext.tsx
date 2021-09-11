import React, { createContext, useState, FC } from 'react';
import {
  FootballFixturesContextState,
  FootballFixturesContextStateType,
} from '../types/footballFixtures';

const contextDefaultValues: FootballFixturesContextState = {
  fixtures: [],
  setFootballFixtures: () => {},
};

export const FootballFixturesContext =
  createContext<FootballFixturesContextState>(contextDefaultValues);

const FootballFixturesProvider: FC = ({ children }) => {
  const [fixtures, setFixtures] = useState<FootballFixturesContextStateType[]>(
    contextDefaultValues.fixtures
  );

  const setFootballFixtures = (
    newFixtures: FootballFixturesContextStateType[]
  ) => {
    setFixtures(newFixtures);
  };

  return (
    <FootballFixturesContext.Provider
      value={{
        fixtures,
        setFootballFixtures,
      }}
    >
      {children}
    </FootballFixturesContext.Provider>
  );
};

export default FootballFixturesProvider;
