import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { Box, Tab, Tabs } from '@mui/material';
import TabCard from '../TabCard';
import Card1 from '../TravelCard/Card1';
import Card2 from '../TravelCard/Card2';

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
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
            <Tab label="Item Four" value="4" />
            <Tab label="Item Five" value="5" />
            <Tab label="Item Six" value="6" />
          </Tabs>
        </Box>
        <Tabs
          value={value}
          variant="scrollable"
          aria-label="scrollable force tabs example"
          sx={{
            m: '10px',
          }}
        >
          <TabPanel value="1">
            <TabCard />
          </TabPanel>
          <TabPanel value="2">
            <Card1 />
          </TabPanel>
          <TabPanel value="3">
            <Card2 />
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
