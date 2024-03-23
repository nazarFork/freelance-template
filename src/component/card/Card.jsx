import { StartOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';

export default function Card({ startIcon = <StartOutlined />, title = null, description = null   }) {
  return (
    <div style={{ border: '1px solid #EFF0F6', padding: '25px', gap: '25px', borderRadius: '20px', border: '1px', backgroundColor: 'white' }}>
      <div style={{ width: '75px', height: '75px', backgroundColor: '#F1F5F9', marginBottom: '25px', borderRadius: '30px' }}>
        <span style={{ width: '40px', height: '40px', backgroundColor: 'white' }}>
          {startIcon}
        </span>
      </div>
      <Typography height='28px' fontFamily='Bricolage Grotesque' fontSize='20px' fontWeight='600' lineHeight='28px' marginBottom='10px'> {title} </Typography>
      <Typography height='48px' fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px'> {description} </Typography>
    </div>
  );
}
