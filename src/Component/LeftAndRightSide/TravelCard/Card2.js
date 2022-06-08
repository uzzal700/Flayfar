import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LuggageIcon from '@mui/icons-material/Luggage';
import AddIcon from '@mui/icons-material/Add';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AirlineSeatLegroomNormalIcon from '@mui/icons-material/AirlineSeatLegroomNormal';
import FlightRoundedIcon from '@mui/icons-material/FlightRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import UsbRoundedIcon from '@mui/icons-material/UsbRounded';
import { Box, Stack } from '@mui/material';

// import Box from '@mui/material/Box';
// import  from '@mui/material/';
import Grid from '@mui/material/Grid';
import FlightIcon from '@mui/icons-material/Flight';
import { Typography } from '@mui/material';

import './Card.css';

const Card2 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent={'space-between'}>
        <Grid
          item
          lg={0.5}
          md={0.5}
          // sx={{
          //   width: '100%',
          // }}
          sx={{
            margin: 'auto',
            '@media (min-width: 300px) and (max-width: 480px)': {
              display: 'none',
            },
            '@media (min-width: 481px) and (max-width: 768px)': {
              display: 'none',
            },
          }}
        >
          <>
            <FlightIcon
              style={{
                transform: 'rotate(180deg)',
              }}
            />
            <div className="dashedLine"></div>
          </>
        </Grid>

        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            width: '700px',
          }}
        >
          <>
            <Box>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '2rem',
                  },
                }}
              >
                <Button variant={'outlined'}>
                  Dhaka <ArrowForwardIcon /> India
                </Button>
              </Typography>
              <div>
                <Typography
                  sx={{
                    '@media (min-width: 300px) and (max-width: 480px)': {
                      fontSize: '1rem',
                    },
                  }}
                >
                  10:30 . 31 May 2022 . Dhaka(DCA)
                  <span style={{ color: 'gray' }}>Terminal-1</span>
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    '@media (min-width: 300px) and (max-width: 480px)': {
                      fontSize: '1rem',
                    },
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  Travel Time: <span style={{ color: 'orange' }}>2h 25m</span>
                </Typography>

                <Typography
                  sx={{
                    '@media (min-width: 300px) and (max-width: 480px)': {
                      fontSize: '1rem',
                    },
                  }}
                >
                  10:30 . 31 May 2022 . New Delhi (DEL)
                  <span style={{ color: 'gray' }}>Terminal-2</span>
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    '@media (min-width: 300px) and (max-width: 480px)': {
                      fontSize: '1rem',
                    },
                  }}
                  color="text.secondary"
                >
                  Travel Time: <span style={{ color: 'orange' }}>2h 25m</span>
                </Typography>
                <br />
                {/* Travel Details */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: '10px',
                  }}
                >
                  <Box
                    sx={{
                      '@media (min-width: 300px) and (max-width: 480px)': {
                        display: 'none',
                      },
                    }}
                  >
                    <img
                      src="https://as1.ftcdn.net/v2/jpg/03/65/42/00/1000_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg"
                      alt=""
                      width="50px"
                      height="40px"
                    />
                  </Box>
                  <Typography
                    className="travel-data"
                    color="text.secondary"
                    sx={{
                      fontSize: 12,
                      paddingLeft: 2,
                      '@media (min-width: 300px) and (max-width: 480px)': {
                        fontSize: '1rem',
                        paddingLeft: 1,
                      },
                    }}
                  >
                    Vistara - UK182 - Economy - 320 - <EventSeatIcon /> v (1)
                    Adult
                    <br /> <FactCheckIcon /> Checked In 30 K <LuggageIcon />{' '}
                    Cabin:SB
                  </Typography>
                </Box>
              </div>
            </Box>{' '}
          </>
        </Grid>
        <Grid
          item
          lg={4}
          md={5}
          sm={12}
          xs={12}
          sx={{
            width: '400px',
            clor: 'red',
            '@media (min-width: 300px) and (max-width: 480px)': {
              fontSize: '1rem',
            },
          }}
          // item
          // lg={6}
          // sx={{
          //   width: '100%',
          // }}
        >
          <>
            <Box>
              <Typography
                sx={{
                  fontSize: 14,
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.2rem',
                  },
                }}
                color="text.secondary"
              >
                <AirlineSeatLegroomNormalIcon />
                <span style={{ paddingLeft: '20px' }}>74 cm seat pitch</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.2rem',
                  },
                }}
                color="text.secondary"
              >
                <FlightRoundedIcon />
                <span style={{ paddingLeft: '20px' }}>A320 (narrowbody)</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.2rem',
                  },
                }}
                color="text.secondary"
              >
                <GridViewRoundedIcon />
                <span style={{ paddingLeft: '20px' }}>3-3 seat layout</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.2rem',
                  },
                }}
                color="text.secondary"
              >
                <NetworkCheckIcon />
                <span style={{ paddingLeft: '20px' }}>No Wi-Fi</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.2rem',
                  },
                }}
                color="text.secondary"
              >
                <UsbRoundedIcon />
                <span style={{ paddingLeft: '20px' }}>USB outlet</span>
              </Typography>
              <Stack direction="row">
                <Button color="primary" startIcon={<AddIcon />}>
                  <span style={{ marginTop: '35px' }}></span>Show More
                </Button>
              </Stack>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'spaceBetween',
                  '@media (min-width: 320px) and (max-width: 480px)': {
                    display: 'none',
                  },
                }}
                className="image-space"
              >
                <img
                  src="https://as1.ftcdn.net/v2/jpg/03/65/42/00/1000_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg"
                  alt=""
                  width="100%"
                  height="40px"
                />
                <img
                  src="https://as1.ftcdn.net/v2/jpg/03/65/42/00/1000_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg"
                  alt=""
                  width="100%"
                  height="40px"
                />
                <img
                  src="https://as1.ftcdn.net/v2/jpg/03/65/42/00/1000_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg"
                  alt=""
                  width="100%"
                  height="40px"
                />
              </Box>
            </Box>
          </>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Card2;
