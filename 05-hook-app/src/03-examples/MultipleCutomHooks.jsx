import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCutomHooks = () => {
  const { counter, increment } = useCounter(0);
  const { data, isLoading, hasError } = useFetch('https://api.giphy.com/v1/gifs/search?api_key=BbN4ATx2qrZzyxCcU60PEh12VNtcQqoe&q=Vegeta&limit=10');
  const { title, import_datetime } = !!data && data[counter];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        isLoading
          ? <LoadingQuote />
          : <Quote title={ title } quote={ import_datetime } />
      }

      <button
        className="btn btn-primary"
        disabled={ isLoading }
        onClick={ () => increment(1) }
      >
        Next quote
      </button>
    </>
  )
}