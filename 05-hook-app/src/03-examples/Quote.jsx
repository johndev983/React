import { useLayoutEffect, useRef } from "react";

export const Quote = ({ title, quote }) => {
  const pRef = useRef();
  
  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect());
  }, [quote])

  return (
    <blockquote className="blockquote text-right" style={{ display: 'flex' }}>
      <p ref={ pRef } className="mb-1">{ title }</p>
      <footer className="blockquote-footer">{ quote }</footer>
    </blockquote>
  );
}