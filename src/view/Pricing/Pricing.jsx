import { Check } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function Pricing() {
  return (
    <div style={{ height: '1097px', padding: '100px 300px' }}>
      <div style={{ height: '141px', padding: '0 400px', marginBottom: '50px' }}>
        <Typography align='center' color='#0061FF' fontFamily='Bricolage Grotesque' fontSize='14px' fontWeight='600' lineHeight='21px' letterSpacing='5%' marginBottom='10px'> PRICING PLANS </Typography>
        <Typography align='center' color='#242133' fontFamily='Bricolage Grotesque' fontSize='48px' fontWeight='600' lineHeight='52.8px' letterSpacing='5%' marginBottom='15px'> Pick your Package </Typography>
        <Typography align='center' color='#8184A3' fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px'>  Tailor your education to meet specific goals, offering flexibility for a personalized experience </Typography>
      </div>
      <div style={{ height: '706px', borderRadius: '40px', padding: '30px', backgroundColor: '#F1F5F9' }}>
        <Grid container style={{ height: '650px' }} >
          <Grid item lg={6} md={6} sm={6} xs={6} style={{ padding: '40px 80px' }}>
            <Typography color='#242133' fontFamily='Bricolage Grotesque' fontSize='26px' fontWeight='600' lineHeight='21px' marginBottom='20px' > Basic </Typography>
            <Typography color='#8184A3' fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' marginBottom='45px' paddingRight='50px' > Perfect for beginners, this guide introduces fundamental concepts across various subjects. </Typography>
            <div style={{ display: 'flex', justifyContent: 'start', marginBottom: '40px'}}>
              <Typography align='left' color='#242133' fontFamily='Bricolage Grotesque' fontSize='68px' fontWeight='600' lineHeight='68px' marginBottom='20px' > $99 </Typography>
              <Typography align='left' color='#242133' fontFamily='Bricolage Grotesque' fontSize='14px' fontWeight='300' lineHeight='21px' marginBottom='20px' marginTop='50px' > / year </Typography>
            </div>
            <button style={{ borderRadius: '50px', padding: '15px 80px', backgroundColor: '#242133', gap: '10px', color: 'white' }}>
              <Typography fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='600' lineHeight='24px' > Get Started </Typography>
            </button>
            <div style={{ marginTop: '45px', height: '126px' }}>
              <Typography align='left' color='#8184A3' fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' marginBottom='10px'> <Check fontSize='small' style={{ color: '#242133' }} /> Accessible Language </Typography>
              <Typography align='left' color='#8184A3' fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' marginBottom='10px'> <Check fontSize='small' style={{ color: '#242133' }} /> Practical Examples </Typography>
              <Typography align='left' color='#8184A3' fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' marginBottom='10px'> <Check fontSize='small' style={{ color: '#242133' }} /> Practical Examples </Typography>
              <Typography align='left' color='#8184A3' fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' marginBottom='10px'> <Check fontSize='small' style={{ color: '#242133' }} /> Interactive Quizzes </Typography>
            </div>  
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6} style={{ padding: '40px 80px', backgroundColor: '#0061FF', borderRadius: '40px', color: 'white' }}>
            <Typography fontFamily='Bricolage Grotesque' fontSize='26px' fontWeight='600' lineHeight='21px' marginBottom='20px' > Complete </Typography>
            <Typography fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' marginBottom='45px' paddingRight='50px' > Take a deeper dive into key concepts with this advanced exploration for a profound understanding. </Typography>
            <div style={{ display: 'flex', justifyContent: 'start', marginBottom: '40px'}}>
              <Typography align='left' fontFamily='Bricolage Grotesque' fontSize='68px' fontWeight='600' lineHeight='68px' marginBottom='20px' > $149 </Typography>
              <Typography align='left' fontFamily='Bricolage Grotesque' fontSize='14px' fontWeight='300' lineHeight='21px' marginBottom='20px' marginTop='50px' > / year </Typography>
            </div>
            <button style={{ borderRadius: '50px', padding: '15px 80px', backgroundColor: 'white', gap: '10px', color: '#0061FF', border: '1px solid white' }}>
              <Typography fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='600' lineHeight='24px' > Download eBook </Typography>
            </button>
            <div style={{ marginTop: '45px', height: '126px', color: 'white' }}>
              <Typography align='left' fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' marginBottom='10px'> <Check fontSize='small' /> In-Depth Analysis </Typography>
              <Typography align='left' fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' marginBottom='10px'> <Check fontSize='small' /> Case Studies </Typography>
              <Typography align='left' fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' marginBottom='10px'> <Check fontSize='small' /> Advanced Visualizations </Typography>
              <Typography align='left' fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' marginBottom='10px'> <Check fontSize='small' /> Critical Thinking Exercises </Typography>
              <Typography align='left' fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' marginBottom='10px'> <Check fontSize='small' /> Expert Insights </Typography>
              <Typography align='left' fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px' marginBottom='10px'> <Check fontSize='small' /> Comprehensive Review </Typography>
            </div>  
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
