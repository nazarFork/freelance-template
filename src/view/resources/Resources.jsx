import { Grid, Typography } from '@mui/material';
import React from 'react';
import CardImg from '../../component/card/CardImg';

export default function Resources({ data = [] }) {
  return (
    <div style={{ height: '759px', padding: '100px 100px', backgroundColor: '#F1F5F9' }}>
      <div style={{ marginBottom: '70px', padding: ' 0 400px' }}>
        <Typography align='center' color='#0061FF' fontFamily='Bricolage Grotesque' fontSize='14px' fontWeight='600' lineHeight='21px' letterSpacing='5%' marginBottom='10px'> ESSENTIAL RESOURCES </Typography>
        <Typography align='center' color='#242133' fontFamily='Bricolage Grotesque' fontSize='48px' fontWeight='600' lineHeight='52.8px' letterSpacing='5%' marginBottom='15px'> Key Pillars for Digital Success </Typography>
        <Typography align='center' color='#8184A3' fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px'> Uncover the essentials of digital success, from financial wisdom to time mastery, ensuring your freelance journey is both prosperous and fulfilling. </Typography>
      </div>
      <Grid container spacing={2} style={{ padding: '0 200px' }}>
        {
          data.map((item, itemIndex) => {
            return (
              <Grid item lg={4} md={4} sm={4} xs={12} key={itemIndex} >
                <CardImg img={item?.img} heading={item?.heading} description={item?.description} />
              </Grid>
            );
          })
        }
      </Grid>
    </div>
  );
}
