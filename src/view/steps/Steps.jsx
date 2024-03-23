import { Typography } from '@mui/material';
import React from 'react';
import Step from '../../component/steps/step';

export default function Steps({ data = [] }) {
  return (
    <div style={{ height: '942px', padding: '100px 500px' }}>
      <div style={{ marginBottom: '50px' }}>
        <Typography align='center' color='#0061FF' fontFamily='Bricolage Grotesque' fontSize='14px' fontWeight='600' lineHeight='21px' letterSpacing='5%'> TABLE OF CONTENTS </Typography>
        <Typography align='center' color='#242133' fontFamily='Bricolage Grotesque' fontSize='48px' fontWeight='600' lineHeight='52.8px' letterSpacing='5%'> Start Freelancing in 4 Quick Steps! </Typography>
      </div>
      <div>
        {
          data.map((item, itemIndex) => {
            return (
              <div key={itemIndex} style={{ padding: '24px 40px' }}>
                <Step startIcon={item?.startIcon} title={item?.title} description={item?.description} />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
