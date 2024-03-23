import { Grid, Typography } from '@mui/material';
import React from 'react';
import book from '../../img/Book.PNG';

export default function Elevate() {
  return (
    <div style={{ padding: '50px 50px 0 50px', height: '568px', position: 'relative' }}>
      <Grid container style={{ padding: '120px 94px', borderRadius: '40px', backgroundColor: '#0061FF', color: 'white' }}>
        <Grid item lg={6} md={6} sm={6} xs={12} >
          <Typography variant='h1' lineHeight='52.8px' marginBottom='20px' style={{ fontFamily: 'Bricolage Grotesque', fontSize: '48px', fontWeight: '600'}}> Ready to elevate your freelance journey? </Typography>
          <Typography variant='h1' lineHeight='24px' marginBottom='28px' style={{ fontFamily: 'Bricolage Grotesque', fontSize: '16px', fontWeight: '300'}}> Dive into 'Freelance Mastery' today and unlock the key strategies for digital success. Don't miss out on this essential guide! </Typography>
          <div style={{ width: '548px', height: '76px',  padding: '10px 10px 10px 20px', gap: '230px', borderRadius: '76px', border: '1px solid #EFF0F6', display: 'flex', backgroundColor: 'white' }}>
            <Typography fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' color='#8184A3' paddingTop='15px'> example@youremail.com </Typography>
            <button style={{ borderRadius: '50px', padding: '7px 16px', backgroundColor: '#242133', gap: '10px', color: 'white' }}>
              <Typography fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='600' lineHeight='24px' > Download </Typography>
            </button>
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <img src={book} alt='Book' height='500px' width='400px' style={{ position: 'absolute', top: '-20px', right: '250px' }} />
        </Grid>
      </Grid>
    </div>
  );
}
