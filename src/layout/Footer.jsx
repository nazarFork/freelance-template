import React from 'react';
import mark from '../img/mark.PNG';
import { Typography } from '@mui/material';

export default function Footer() {
  return (
    <div style={{ padding: '30px 120px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #EFF0F6' }}>
      <img src={mark} alt='mark' />
      <Typography fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' color='#8184A3' marginTop='20px' > Copyright © Designspark | Designed by Designspark - Powered by Webflow </Typography>
    </div>
  );
}
