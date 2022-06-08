import React from 'react';
import './Token.css';
import Slider from 'react-slick';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Box } from '@mui/material';

const Token = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box style={{ display: 'flex', margin: 'auto' }}>
        <Box className="bdcard">
          <AcUnitIcon className="AcUnitIcon" />
          <Box>
            <p>Tk</p>
            <h5>BDT 5628</h5>
          </Box>
        </Box>
        <Box className="bdcard">
          <AcUnitIcon className="AcUnitIcon" />
          <Box>
            <p>Tk</p>
            <h5>BDT 5628</h5>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Token;
