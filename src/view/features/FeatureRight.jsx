import { CheckCircleOutlineSharp } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';

export default function FeatureRight() {
  return (
    <>
      <div style={{ padding: '100px 80px 100px 40px', height: '826px' }}>
        <div style={{ padding: '72px 40px 0 40px' }}>
          <Typography variant='body1' fontFamily="Bricolage Grotesque" fontSize="14px" fontWeight="600" lineHeight="21px" letterSpacing="5%" color="#0061FF" marginBottom="10px" > ABOUT THE BOOK </Typography>
          <Typography variant='body1' height='106px' fontFamily="Bricolage Grotesque" fontSize="48px" fontWeight="600" lineHeight="52.8px" color="#242133" marginBottom="20px" paddingRight="250px" > Your Guide to Achieving Results </Typography>
          <Typography variant='body1' height='48px' fontFamily="Bricolage Grotesque" fontSize="16px" fontWeight="300" lineHeight="24px" color="#8184A3" marginBottom="30px" paddingRight="150px" > Explore this guide packed with practical insights, presenting a hands-on approach to achieving results effortlessly </Typography>
          <Typography variant='body1' height='48px' fontFamily="Bricolage Grotesque" fontSize="16px" fontWeight="300" lineHeight="24px" color="#242133" paddingRight="150px" > <CheckCircleOutlineSharp fontSize='small' /> Comprehensive coverage for a thorough understanding </Typography>
          <Typography variant='body1' height='48px' fontFamily="Bricolage Grotesque" fontSize="16px" fontWeight="300" lineHeight="24px" color="#242133" paddingRight="150px" ><CheckCircleOutlineSharp fontSize='small' /> Practical insights for immediate application </Typography>
          <Typography variant='body1' height='48px' fontFamily="Bricolage Grotesque" fontSize="16px" fontWeight="300" lineHeight="24px" color="#242133" paddingRight="150px" ><CheckCircleOutlineSharp fontSize='small' /> Informative content with a visually appealing presentation</Typography>
          <Typography variant='body1' height='48px' fontFamily="Bricolage Grotesque" fontSize="16px" fontWeight="300" lineHeight="24px" color="#242133" paddingRight="150px" ><CheckCircleOutlineSharp fontSize='small' /> Clear and easy-to-understand, suitable for all levels </Typography>
          <button style={{ padding: "16px 27px", borderRadius: '50px', backgroundColor: '#242133', color: 'white', marginTop: '20px' }}> Download eBook </button>
        </div>
      </div>
    </>
  )
}