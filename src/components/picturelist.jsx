import { useState, useEffect } from "react";

export const Picturelist = ({ animal, getData }) => {
  const [pictureData, setPictureData] = useState(null);

  useEffect(() =>{
    const result =getData?.(animal).then((response) => 
      setPictureData(response)
    );
  }, [animal, getData]);

  return (
   <figure>
      {pictureData === null ? (
        <p>now loading...</p>
      ) : (
        pictureData.data.hits.map((hit,index) => (
          <img key={index} src={hit.previewURL}/>
        ))
      )}
    </figure>
  )
}