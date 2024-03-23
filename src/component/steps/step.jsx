import { Apple } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';

export default function Step({ startIcon = <Apple />, title = "", description = "" }) {
  return (
    <div style={{ border: '1px solid #EFF0F6', borderRadius: '90px', padding: '24px 30px', gap: '10px', height: '134px', display: 'flex' }}>
      <div style={{ width: '80px', height: '80px', borderRadius: '100%', backgroundColor: '#F1F5F9' }}>
        {startIcon}
      </div>
      <div style={{ marginLeft: '35px' }}>
        <Typography fontFamily='Bricolage Grotesque' fontSize='20px' lineHeight='28px' fontWeight='600' color='#242133' height='28px' marginBottom='10px'> {title} </Typography>
        <Typography fontFamily='Bricolage Grotesque' fontSize='16px' lineHeight='24px' fontWeight='300' color='#8184A3' height='48px'> {description} </Typography>
      </div>
    </div>
  );
}
