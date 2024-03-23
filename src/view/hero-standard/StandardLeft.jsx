import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function StandardLeft() {
  return (
    <>
      <div style={{ padding: "100px 100px" }}>
        <Typography variant='h6' style={{ fontSize: '14px', color: '#0061FF' }}> DOWNLOAD THE EBOOK </Typography>
        <Grid item>
          <Typography variant='h1' style={{ fontFamily: 'Bricolage Grotesque', fontSize: '68px', fontWeight: '600', color: '#242133' }}> Freelance </Typography>
          <Typography variant='h1' style={{ fontFamily: 'Bricolage Grotesque', fontSize: '68px', fontWeight: '600', color: '#242133' }}> Mastery: Thriving </Typography>
          <Typography variant='h1' style={{ fontFamily: 'Bricolage Grotesque', fontSize: '68px', fontWeight: '600', color: '#242133' }}> in the Digital </Typography>
          <Typography variant='h1' style={{ fontFamily: 'Bricolage Grotesque', fontSize: '68px', fontWeight: '600', color: '#242133' }}> Landscape </Typography>
        </Grid>
        <Typography fontFamily='Bricolage Grotesque' fontSize='20px' fontWeight='300' lineHeight='30px' color='#8184A3'> Unlock the secrets to financial empowerment and work-life harmony for a fulfilling freelancing journey. </Typography>
        <div style={{ width: '548px', height: '76px',  padding: '10px 10px 10px 20px', gap: '201px', borderRadius: '76px', border: '1px solid #EFF0F6', display: 'flex' }}>
          <Typography fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' color='#8184A3' paddingTop='15px'> example@youremail.com </Typography>
          <button style={{ borderRadius: '50px', padding: '7px 16px', backgroundColor: '#242133', gap: '10px', color: 'white' }}>
            <Typography fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='600' lineHeight='24px' > Download </Typography>
          </button>
        </div>
      </div >
    </>
  );
}
