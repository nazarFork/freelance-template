import { Typography } from '@mui/material';
import React from 'react';

export default function CardImg({ img = null, heading = null, description = null }) {
  return (
    <div style={{ height: '342px' }}>
      <img src={img} height='240px' />
      <Typography fontSize='20px' fontWeight='600' lineHeight='28px' fontFamily='Bricolage Grotesque' color='#242133' marginTop='16px' marginBottom='10px' > {heading} </Typography>
      <Typography fontSize='16px' fontWeight='300' lineHeight='24px' color='#8184A3' fontFamily='Bricolage Grotesque' > {description} </Typography>
    </div>
  );
}
