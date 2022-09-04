import React from 'react';
import CardMedia from '@mui/material/CardMedia';

function Card_image({ imagespostes }) {
  return (
    <>
      <CardMedia
        component='img'
        height='194'
        image={imagespostes}
        alt='Paella dish'
        sx={{ borderRadius: '50%' }}
      />
    </>
  );
}

export default Card_image;
