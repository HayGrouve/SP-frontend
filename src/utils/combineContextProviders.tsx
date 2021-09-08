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
