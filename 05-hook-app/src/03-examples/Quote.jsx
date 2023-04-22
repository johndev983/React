import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ title, quote }) => {
  const pRef = useRef();
  const [ boxSize, setBoxSize ] = useState({ height: 0, width: 0 });
  
  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [quote])

  return (
    <>
      <blockquote className="blockquote text-right" style={{ display: 'flex' }}>
        <p ref={ pRef } className="mb-1">{ title }</p>
        <footer className="blockquote-footer">{ quote }</footer>
      </blockquote>
    
      <code>{ JSON.stringify(boxSize) }</code>
    </>
  );
}