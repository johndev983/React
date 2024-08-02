interface Props {
  name?:     string;
  subTitle?: string;
  title:     string;
}

export const FirtsApp = ({ name = 'John Gil', subTitle = 'No hay subtitle', title }: Props) => {
  return (
    <>
      <h1 data-testid="test-title">{ title }</h1>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}