import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { Box, Tab, Tabs } from '@mui/material';
import Card1 from '../TravelCard/Card1';
import Card2 from '../TravelCard/Card2';
import Card3 from '../TravelCard/Card3';

const TabScroller = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        // width: '100%',
        '@media (min-width: 320px) and (max-width: 480px)': {
          width: '370px',
        },
        '@media (min-width: 454px) and (max-width: 768px)': {
          width: '505px',
        },
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            <Tab label="Flight Details" value="1" />
            <Tab label="Fare summary" value="2" />
            <Tab label="Discount & Gross" value="3" />
            <Tab label="Baggage" value="4" />
            <Tab label="Cancellation" value="5" />
            <Tab label="Date Change" value="6" />
          </Tabs>
        </Box>
        <Tabs
          value={value}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable force tabs example"
          sx={{
            m: '10px',
          }}
        >
          <TabPanel value="1">
            <Box sx={{ border: 1, p: '0.5rem', mb: '0.2rem' }}>
              <Card1 />
            </Box>
            <Box sx={{ border: 1, p: '0.5rem', mb: '0.2rem' }}>
              <Card1 />
            </Box>
            <Box sx={{ border: 1, p: '0.5rem', mb: '0.2rem' }}>
              <Card1 />
            </Box>
            <Box sx={{ border: 1, p: '0.5rem', mb: '0.2rem' }}>
              <Card1 />
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Card2 />
          </TabPanel>
          <TabPanel value="3">
            <Card3 />
          </TabPanel>
          <TabPanel value="4">Item four</TabPanel>
          <TabPanel value="5">Item Five</TabPanel>
          <TabPanel value="6">Item Six</TabPanel>
        </Tabs>
      </TabContext>
    </Box>
  );
};

export default TabScroller;
