import { Typography } from '@mui/material';
import React from 'react';

export default function FeatureLeft() {
  return (
    <div style={{ padding: '100px 40px 100px 80px', height: '826px' }}>
      <div style={{
        height: '230px',
        gap: '10px',
        borderRadius: '30px 30px 0px 0px',
        border: '1px 1px 0px 1px',
        backgroundColor: '#0061FF',
        padding: '60px 50px'
      }}>
        <div style={{ height: '26px' }}>
          <Typography variant='body1' fontFamily="Bricolage Grotesque" fontSize="12px" fontWeight="400" lineHeight="24px" letterSpacing="0.2px" color="white" > navigating independence </Typography>
        </div>
        <div style={{ height: '76px' }}>
          <Typography fontFamily="Bricolage Grotesque" fontSize="32px" fontWeight="600" lineHeight="38px" letterSpacing="0.2px" color="white" > Learn essential strategies for thriving as a freelancer </Typography>
        </div>
      </div>
      <div style={{ height: '396px', gap: '20px' }}>
        <div style={{ padding: '40px 50px 30px 50px' }}>
          <Typography fontFamily="Bricolage Grotesque" fontSize="16px" fontWeight="600" lineHeight="24px" letterSpacing="0.2px" color="#242133" > Financial Empowerment </Typography>
          <Typography fontFamily="Bricolage Grotesque" fontSize="12px" fontWeight="300" lineHeight="20px" letterSpacing="0.2px" color="#8184A3" marginTop="15px" > Unlock the secrets to sustainable income and financial stability in the freelance world. Discover practical tips on setting fair rates, negotiating contracts, and building a diverse client portfolio to ensure a steady flow of income and long-term success. </Typography>
        </div>
        <div style={{ padding: '0px 50px 30px 50px' }}>
          <Typography fontFamily="Bricolage Grotesque" fontSize="16px" fontWeight="600" lineHeight="24px" letterSpacing="0.2px" color="#242133" > Work Life Harmony </Typography>
          <Typography fontFamily="Bricolage Grotesque" fontSize="12px" fontWeight="300" lineHeight="20px" letterSpacing="0.2px" color="#8184A3" marginTop="15px" > Explore proven techniques for maintaining a healthy work-life balance while freelancing. From effective stress management to building a supportive network, discover how to enjoy the freedom of freelancing without sacrificing your well-being. </Typography>
        </div>
        <div style={{ height: '58px', padding: '0 120px 30px 120px', display: 'flex', justifyContent: 'space-around' }}>
          <span style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography fontFamily="Bricolage Grotesque" fontSize="48px" fontWeight="600" lineHeight="57.6px" color="#242133" > 100 </Typography>
            <Typography fontFamily="Bricolage Grotesque" fontSize="48px" fontWeight="600" lineHeight="57.6px" color="#0061FF" > + </Typography>
            <Typography fontFamily="Bricolage Grotesque" fontSize="14px" fontWeight="400" lineHeight="21px" color="#242133" margin="20px 10px" > Pages </Typography>
          </span>
          <span style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography fontFamily="Bricolage Grotesque" fontSize="48px" fontWeight="600" lineHeight="57.6px" color="#242133" > 25 </Typography>
            <Typography fontFamily="Bricolage Grotesque" fontSize="48px" fontWeight="600" lineHeight="57.6px" color="#0061FF" > + </Typography>
            <Typography fontFamily="Bricolage Grotesque" fontSize="14px" fontWeight="400" lineHeight="21px" color="#242133"  margin="20px 10px" > Tutorials </Typography>
          </span>
        </div>
      </div>
    </div >
  );
}
