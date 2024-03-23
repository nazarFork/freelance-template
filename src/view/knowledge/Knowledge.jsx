import { Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '../../component/card/Card';

export default function Knowledge({ data = [] }) {
  return (
    <div style={{ backgroundColor: '#F1F5F9', height: '602px', padding: '100px 80px' }}>
      <Typography align='center' color='#242133' fontFamily='Bricolage Grotesque' fontSize='48px' fontWeight='600' lineHeight='52.8px'> Everything you need to know </Typography>
      <Typography align='center' color='#8184A3' fontFamily='Bricolage Grotesque' fontSize='16px' fontWeight='300' lineHeight='24px'> Whether you're a seasoned pro or a newbie, this book is your essential oadmap for success and fulfillment in the freelancing world. </Typography>
      <Grid container spacing={2} marginTop='50px'>
        {
          data.map((item, itemIndex) => {
            return (
              <Grid item key={itemIndex} lg={4} md={4} sm={6} xs={6}>
                <Card startIcon={item?.startIcon} title={item?.title} description={item?.description} />
              </Grid>
            );
          })
        }
      </Grid>
    </div>
  );
}
