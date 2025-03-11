"use client"; // Needed for Next.js App Router

import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

const Graph = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Today Forecast " />
          <Tab label="This Week Forecast" />
          <Tab label="This Month Forecast" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <div>
          hello
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
};

export default Graph;

// Custom TabPanel Component
const TabPanel = ({ children, value, index }: { children: React.ReactNode; value: number; index: number }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}><Typography>{children}</Typography></Box>}
    </div>
  );
};
