import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Card2 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper>xs lg={6}</Paper>
        </Grid>
        <Grid item lg={2}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item lg={4}>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Card2;
