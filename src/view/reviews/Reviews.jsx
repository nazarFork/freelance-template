import React from 'react';
import '../../style.css';
import { Grid, Typography } from '@mui/material';
import CardView from '../../component/card/CardView';

export default function Reviews({ data = [] }) {
  return (
    <div style={{ height: '651px', padding: '100px 80px' }}>
      <Typography color='#242133' align='center' fontSize='48px' fontWeight='600' lineHeight='52.8px' fontFamily='Bricolage Grotesque'> Reviews from Happy Campers </Typography>
      <div style={{ marginTop: '50px' }}>
        <Grid container spacing={2}>
        {
          data.map((item, itemIndex) => {
            return (
              <Grid item key={itemIndex} lg={4} md={4} sm={6} xs={6}>
                <CardView stars={item?.stars} heading={item?.heading} description={item?.description} img={item?.img} name={item?.name} major={item?.major} />
              </Grid>
            );
          })
        }
      </Grid>
    </div>
    </div >
  );
}
