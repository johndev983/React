export const GifGrid = ({ category }) => {
  const getGifs = async() => {
    const url = `api.giphy.com/v1/gifs/search?api_key=BbN4ATx2qrZzyxCcU60PEh12VNtcQqoe&q=${ category }}`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    console.log(resp.statusText);

    // const gifs = data.map( img => ({
    //   id: img.id,
    //   title: img.title,
    //   url: img.images
    // }));
  }

  getGifs();

  return (
    <>
      <h3>{ category }</h3>
    </>
  )
}