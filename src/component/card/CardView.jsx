import { Typography } from '@mui/material';
import React from 'react';

export default function CardView({ stars = 0, heading = "", description = "", img = null, name = "", major = "" }) {

  let str_stars = "";
  let i = 1;
  while (i <= stars * 1) {
    str_stars += "★";
    i++;
  }

  return (
    <div style={{ padding: '60px', border: '1px solid #EFF0F6', borderRadius: '30px' }}>
      <div style={{ marginBottom: '30px' }}>
        <span style={{ height: '24px', marginBottom: '15px', color: 'orange', fontSize: '25px' }}>
          {str_stars}
        </span>
        <span style={{ marginBottom: '15px' }}>
          <Typography fontSize='20px' fontWeight='600' fontFamily='Bricolage Grotesque' lineHeight='28px' color='#242133'> {heading} </Typography>
        </span>
        <span>
          <Typography fontSize='16px' fontWeight='300' fontFamily='Bricolage Grotesque' lineHeight='24px' color='#8184A3'> {description} </Typography>
        </span>
      </div>
      <div style={{ display: 'flex' }}>
        <span >
          <img src={img} alt='person' width='80px' height='60px' style={{ borderRadius: '100%' }} />
        </span>
        <span>
          <Typography fontSize='16px' fontWeight='600' lineHeight='24px' fontFamily='Bricolage Grotesque' color='#242133'> {name} </Typography>
          <Typography fontSize='14px' fontWeight='300' lineHeight='21px' fontFamily='Bricolage Grotesque' color='#8184A3'> {major} </Typography>
        </span>
      </div>
    </div>
  );
}
