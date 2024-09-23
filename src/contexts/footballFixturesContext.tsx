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
  totalForecasts: 0,
  totalCorrectForecasts: 0,
  fixtures: [],
  isLoading: { loading: false, isFirstComponentMount: true },
  setFootballFixtures: () => {},
  incrementTotalForecasts: () => {},
  incrementTotalCorrectForecasts: () => {},
};

export const FootballFixturesContext =
  createContext<FootballFixturesContextState>(contextDefaultValues);

const FootballFixturesProvider: FC = ({ children }) => {
  const [fixtures, setFixtures] = useState<FootballFixturesContextStateType[]>(
    contextDefaultValues.fixtures
  );
  const [isLoading, setIsLoading] = useState(contextDefaultValues.isLoading);
  const [totalForecasts, setTotalForecasts] = useState(
    contextDefaultValues.totalForecasts
  );
  const [totalCorrectForecasts, setTotalCorrectForecasts] = useState(
    contextDefaultValues.totalCorrectForecasts
  );

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
        totalForecasts: 0,
        totalCorrectForecasts: 0,
        fixtures,
        isLoading,
        setFootballFixtures,
        incrementTotalForecasts: () => {
          setTotalForecasts(totalForecasts + 1);
        },
        incrementTotalCorrectForecasts: () => {
          setTotalCorrectForecasts(totalCorrectForecasts + 1);
        },
      }}
    >
      {children}
    </FootballFixturesContext.Provider>
  );
};

export default FootballFixturesProvider;
