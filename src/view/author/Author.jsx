import React from 'react';
import imgpath from '../../img/1.PNG';
import { Typography } from '@mui/material';
import { Facebook, LocalPhone, OndemandVideo, X, YouTube } from '@mui/icons-material';

export default function Author() {
  return (
    <div style={{ padding: '0 100px 100px 100px' }}>
      <div style={{ padding: '0 150px', display: 'flex' }} >
        <div style={{ borderRadius: '50px' }}>
          <img src={imgpath} alt='author' width={440} height={440}   />
        </div>
        <div style={{ padding: '50px', marginLeft: '100px' }}>
          <Typography fontFamily='Bricolage Grotesque' fontSize='14px' fontWeight='600' lineHeight='21px' letterSpacing='5%' color='#0061FF' marginBottom='10px' > ABOUT THE AUTHOR </Typography>
          <Typography fontFamily='Bricolage Grotesque' fontSize='48px' fontWeight='600' lineHeight='52.8px' color='#242133' marginBottom='20px' > Meet Emma Croft </Typography>
          <Typography fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' color='#8184A3' marginBottom='40px' > Hey there, I'm Emma Croft, your go-to freelance guru! With a sprinkle of passion, a dash of digital know-how, and a proven recipe for success, I'm here to guide you through the wild world of freelancing. As a seasoned pro and an enthusiastic educator, let's turn your freelancing journey into a fun-filled ride to mastery. Join me, Emma Croft, where we make success and fulfillment the coolest duo in the digital realm! </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-around', paddingRight: '500px' }}>
            <Facebook />
            <X />
            <YouTube />
            <LocalPhone />
          </div>
        </div>
      </div>
    
    </div>
  );
}
