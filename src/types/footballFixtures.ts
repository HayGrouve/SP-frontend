export type FootballFixturesContextState = {
  fixtures: {
    id: number;
    dtd: string;
    fixture: {
      id: number;
      referee: string;
      timezone: string;
      date: string;
      timestamp: number;
      periods: {
        first: number;
        second: number;
      };
      venue: {
        id: string;
        name: string;
        city: string;
      };
      status: {
        long: string;
        short: string;
        elapsed: number;
      };
    };
    league: {
      id: string;
      name: string;
      country: string;
      logo: string;
      flag: string;
      season: number;
      round: string;
    };
    teams: {
      home: {
        id: number;
        name: string;
        logo: string;
        winner: string;
      };
      away: {
        id: number;
        name: string;
        logo: string;
        winner: string;
      };
    };
    goals: {
      home: number;
      away: number;
    };
    score: {
      halftime: {
        home: number;
        away: number;
      };
      fulltime: {
        home: number;
        away: number;
      };
      extratime: {
        home: number;
        away: number;
      };
      penalty: {
        home: number;
        away: number;
      };
    };
    odds: [
      {
        value: string;
        odd: string;
      },
      {
        value: string;
        odd: string;
      },
      {
        value: string;
        odd: string;
      }
    ];
  }[];
  isLoading: { loading: boolean; isFirstComponentMount: boolean };
  setFootballFixtures: (fixtures: FootballFixturesContextStateType[]) => void;
};

export type FootballFixturesContextStateType = {
  id: number;
  dtd: string;
  fixture: {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number;
      second: number;
    };
    venue: {
      id: string;
      name: string;
      city: string;
    };
    status: {
      long: string;
      short: string;
      elapsed: number;
    };
  };
  league: {
    id: string;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: string;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: string;
    };
  };
  goals: {
    home: number;
    away: number;
  };
  score: {
    halftime: {
      home: number;
      away: number;
    };
    fulltime: {
      home: number;
      away: number;
    };
    extratime: {
      home: number;
      away: number;
    };
    penalty: {
      home: number;
      away: number;
    };
  };
  odds: [
    {
      value: string;
      odd: string;
    },
    {
      value: string;
      odd: string;
    },
    {
      value: string;
      odd: string;
    }
  ];
};
