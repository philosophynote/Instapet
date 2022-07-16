import { useState, useEffect } from "react";
import { ImageList,ImageListItem } from '@mui/material';

export const Picturelist = ({ animal, getData }) => {
  const [pictureData, setPictureData] = useState(null);

  useEffect(() =>{
    const result =getData?.(animal).then((response) => 
      setPictureData(response)
    );
  }, [animal, getData]);

  return (
  //  <figure>
  //     {pictureData === null ? (
  //       <p>now loading...</p>
  //     ) : (
  //       pictureData.data.hits.map((hit,index) => (
  //         <img key={index} src={hit.previewURL}/>
  //       ))
  //     )}
  //   </figure>
    <ImageList sx={{ width: 1200, height: 800 }} cols={5} rowHeight={164}>
      {pictureData === null ? (
        <p>now loading...</p>
      ) : (
      pictureData.data.hits.map((hit) => (
        <ImageListItem key={hit.previewURL}>
          <img
            src={`${hit.previewURL}?w=200&h=200&fit=crop&auto=format`}
            srcSet={`${hit.previewURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
          />
        </ImageListItem>
      ))
      )}
    </ImageList>
  )
}