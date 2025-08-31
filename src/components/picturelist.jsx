import { useState, useEffect } from "react";
import { Card, CardMedia, CardContent, Avatar, Typography, IconButton, Box, Grid } from '@mui/material';
import { FavoriteBorder, ChatBubbleOutline, Share } from '@mui/icons-material';

export const Picturelist = ({ animal, getData }) => {
  const [pictureData, setPictureData] = useState(null);

  useEffect(() =>{
    getData?.(animal).then((response) => 
      setPictureData(response)
    );
  }, [animal, getData]);

  return (
    <Box sx={{ px: 2 }}>
      {pictureData === null ? (
        <Typography variant="body1" sx={{ textAlign: 'center', mt: 4 }}>Loading...</Typography>
      ) : (
        <Grid container spacing={2}>
          {pictureData.data.hits.map((hit) => (
            <Grid item xs={12} sm={6} md={4} key={hit.id}>
              <Card sx={{ boxShadow: 'none', border: '1px solid #dbdbdb' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 1.5 }}>
                  <Avatar sx={{ mr: 1.5, bgcolor: '#ff6b6b', width: 32, height: 32 }}>
                    {animal.charAt(0).toUpperCase()}
                  </Avatar>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {animal}lover{Math.floor(Math.random() * 1000)}
                  </Typography>
                </Box>
                
                <CardMedia
                  component="img"
                  image={hit.webformatURL}
                  alt={hit.tags}
                  sx={{ 
                    aspectRatio: '1/1',
                    objectFit: 'cover'
                  }}
                />
                
                <CardContent sx={{ pt: 1.5, pb: 1.5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 1 }}>
                    <IconButton size="small">
                      <FavoriteBorder fontSize="small" />
                    </IconButton>
                    <IconButton size="small">
                      <ChatBubbleOutline fontSize="small" />
                    </IconButton>
                    <IconButton size="small">
                      <Share fontSize="small" />
                    </IconButton>
                  </Box>
                  
                  <Typography variant="caption" sx={{ fontWeight: 'bold', display: 'block', mb: 0.5 }}>
                    {hit.likes} likes
                  </Typography>
                  
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                    <strong>{animal}lover{Math.floor(Math.random() * 1000)}</strong> Beautiful {animal}! {hit.tags}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}