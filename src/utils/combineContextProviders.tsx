interface Props {
  providers: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
  children: React.ReactNode;
}

export default function AppContextProvider(props: Props) {
  const { providers: components = [], children, ...rest } = props;

  return (
    <>
      {components.reduceRight((acc, Provider) => {
        return <Provider {...rest}>{acc}</Provider>;
      }, children)}
    </>
  );
}

export const rowForecastMap = [
  {
    rowNumber: 2,
    forecast: "1/2",
  },
  {
    rowNumber: 3,
    forecast: "X/2",
  },
  {
    rowNumber: 8,
    forecast: "1/2",
  },
  {
    rowNumber: 9,
    forecast: "X/2",
  },
  {
    rowNumber: 11,
    forecast: "X/2",
  },
  {
    rowNumber: 15,
    forecast: "1/2",
  },
  {
    rowNumber: 19,
    forecast: "1/2",
  },
  {
    rowNumber: 21,
    forecast: "1/2",
  },
  {
    rowNumber: 24,
    forecast: "1/2",
  },
  {
    rowNumber: 25,
    forecast: "1/2",
  },
  {
    rowNumber: 27,
    forecast: "X/2",
  },
  {
    rowNumber: 29,
    forecast: "X/2",
  },
  {
    rowNumber: 34,
    forecast: "1/2",
  },
  {
    rowNumber: 37,
    forecast: "1/X",
  },
  {
    rowNumber: 38,
    forecast: "1/X",
  },
  {
    rowNumber: 44,
    forecast: "1/2",
  },
  {
    rowNumber: 47,
    forecast: "1/X",
  },
  {
    rowNumber: 48,
    forecast: "X/2",
  },
  {
    rowNumber: 50,
    forecast: "1/2",
  },
  {
    rowNumber: 51,
    forecast: "1/X",
  },
  {
    rowNumber: 53,
    forecast: "1/2",
  },
  {
    rowNumber: 57,
    forecast: "X/2",
  },
  {
    rowNumber: 59,
    forecast: "1/2",
  },
  {
    rowNumber: 62,
    forecast: "1/X",
  },
  {
    rowNumber: 63,
    forecast: "X/2",
  },
  {
    rowNumber: 66,
    forecast: "X/2",
  },
  {
    rowNumber: 67,
    forecast: "1/2",
  },
  {
    rowNumber: 68,
    forecast: "1/X",
  },
  {
    rowNumber: 70,
    forecast: "1/X",
  },
  {
    rowNumber: 73,
    forecast: "1/2",
  },
  {
    rowNumber: 74,
    forecast: "1/X",
  },
  {
    rowNumber: 75,
    forecast: "1/2",
  },
  {
    rowNumber: 78,
    forecast: "1/X",
  },
  {
    rowNumber: 84,
    forecast: "1/2",
  },
  {
    rowNumber: 85,
    forecast: "1/2",
  },
  {
    rowNumber: 87,
    forecast: "1/X",
  },
  {
    rowNumber: 88,
    forecast: "X/2",
  },
  {
    rowNumber: 91,
    forecast: "1/X",
  },
  {
    rowNumber: 94,
    forecast: "1/X",
  },
  {
    rowNumber: 95,
    forecast: "1/2",
  },
  {
    rowNumber: 104,
    forecast: "1/X",
  },
  {
    rowNumber: 106,
    forecast: "1/X",
  },
  {
    rowNumber: 111,
    forecast: "1/2",
  },
  {
    rowNumber: 112,
    forecast: "1/X",
  },
  {
    rowNumber: 115,
    forecast: "1/X",
  },
  {
    rowNumber: 116,
    forecast: "X/2",
  },
  {
    rowNumber: 118,
    forecast: "X/2",
  },
  {
    rowNumber: 119,
    forecast: "1/2",
  },
  {
    rowNumber: 126,
    forecast: "1/2",
  },
  {
    rowNumber: 131,
    forecast: "1/2",
  },
  {
    rowNumber: 132,
    forecast: "1/X",
  },
  {
    rowNumber: 134,
    forecast: "1/2",
  },
  {
    rowNumber: 136,
    forecast: "X/2",
  },
  {
    rowNumber: 138,
    forecast: "X/2",
  },
  {
    rowNumber: 140,
    forecast: "1/X",
  },
  {
    rowNumber: 141,
    forecast: "1/X",
  },
  {
    rowNumber: 142,
    forecast: "1/X",
  },
  {
    rowNumber: 145,
    forecast: "1/X",
  },
  {
    rowNumber: 146,
    forecast: "X/2",
  },
  {
    rowNumber: 147,
    forecast: "X/2",
  },
  {
    rowNumber: 153,
    forecast: "1/X",
  },
  {
    rowNumber: 154,
    forecast: "1/2",
  },
  {
    rowNumber: 156,
    forecast: "1/X",
  },
  {
    rowNumber: 159,
    forecast: "X/2",
  },
  {
    rowNumber: 163,
    forecast: "1/2",
  },
  {
    rowNumber: 165,
    forecast: "X/2",
  },
  {
    rowNumber: 166,
    forecast: "X/2",
  },
  {
    rowNumber: 167,
    forecast: "1/2",
  },
  {
    rowNumber: 168,
    forecast: "1/2",
  },
  {
    rowNumber: 169,
    forecast: "1/2",
  },
  {
    rowNumber: 170,
    forecast: "X/2",
  },
  {
    rowNumber: 172,
    forecast: "1/2",
  },
];
