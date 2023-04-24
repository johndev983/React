import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [ counter, setCounter ] = useState( 10 );

  const increment = useCallback(
    (value) => {
      setCounter( (counter) => counter + value );
    },
    [],
  )
  
  //   const increment = () => {
  //     setCounter( counter + 1 );
  //   }

  return (
    <>
      <h1>UseCallback Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={ increment } />
    </>
  );
}
