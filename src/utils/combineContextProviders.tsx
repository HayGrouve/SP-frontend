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
    rowNumber: 1,
    forecast: "1/X",
  },
];
