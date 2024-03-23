import { Typography } from '@mui/material';
import React from 'react';
import '../style.css';

export default function NavbarMenu() {
  return (
    <>
      <div className='navbar-font' style={{ display: "flex", justifyContent: "space-between", margin: "0 25%" }}>
        <Typography align='center'> About the Book </Typography>
        <Typography align='center'> Table of Contents </Typography>
        <Typography align='center'> Resources </Typography>
        <Typography align='center'> Pricing </Typography>
        <Typography align='center'> Author </Typography>
      </div>
    </>
  );
}
