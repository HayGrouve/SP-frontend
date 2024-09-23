import React, {
  createContext,
  useState,
  FC,
  useEffect,
  useCallback,
} from "react";
import {
  FootballFixturesContextState,
  FootballFixturesContextStateType,
} from "../types/footballFixtures";

const contextDefaultValues: FootballFixturesContextState = {
  fixtures: [],
  isLoading: { loading: false, isFirstComponentMount: true },
  setFootballFixtures: () => {},
};

export const FootballFixturesContext =
  createContext<FootballFixturesContextState>(contextDefaultValues);

const FootballFixturesProvider: FC = ({ children }) => {
  const [fixtures, setFixtures] = useState<FootballFixturesContextStateType[]>(
    contextDefaultValues.fixtures
  );
  const [isLoading, setIsLoading] = useState(contextDefaultValues.isLoading);

  const sortFixtures = (fixtures: FootballFixturesContextStateType[]) => {
    return [...fixtures].sort(function (a, b) {
      if (a.fixture.timestamp < b.fixture.timestamp) return -1;
      if (a.fixture.timestamp > b.fixture.timestamp) return 1;
      if (a.fixture.id < b.fixture.id) return -1;
      if (a.fixture.id > b.fixture.id) return 1;
      return 0;
    });
  };

  const requestGetFootballFixtures = useCallback(async () => {
    setIsLoading({ ...isLoading, loading: true });
    const response = await fetch("https://sportpredictapi.herokuapp.com/");
    const fixtures = await response.json();
    setFixtures(sortFixtures(fixtures));
    setIsLoading({
      ...isLoading,
      loading: false,
      isFirstComponentMount: false,
    });
  }, [isLoading]);

  const setFootballFixtures = (
    newFixtures: FootballFixturesContextStateType[]
  ) => {
    setFixtures(newFixtures);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      requestGetFootballFixtures();
    }, 20000);
    return () => {
      clearInterval(interval);
    };
  }, [requestGetFootballFixtures]);

  return (
    <FootballFixturesContext.Provider
      value={{
        fixtures,
        isLoading,
        setFootballFixtures,
      }}
    >
      {children}
    </FootballFixturesContext.Provider>
  );
};

export default FootballFixturesProvider;
