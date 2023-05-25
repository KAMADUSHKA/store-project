import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


export default function DigiBill() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div id='table'>
        <Box sx={{ width: '100%', typography: 'body1'}}>
            <TabContext value= {value} >
                <Box sx={{ borderBottom: 2, borderColor: 'divider'}} >
                    <TabList onChange={handleChange} aria-label="lab API tabs example" >
                        <Tab label = "Log Paths" value = "1" />
                        <Tab label = "Services" value = "2" /> 
                        <Tab label = "Script" value = "3" />
                        <Tab label = "Database" value = "4" />
                        <Tab label = "Documentation" value = "5" />
                        <Tab label = "Troubleshooting Tips" value = "6" />
                    </TabList>
                </Box>
                
                    <TabPanel value = "1">
                        <div>
                            <span>fhcgfdxgf</span><br/>
                            <span>fhcgfdxgf</span>
                        </div>
                    </TabPanel>
                    <TabPanel value = "2"> Item Two </TabPanel>
                    <TabPanel value = "3"> Item three </TabPanel>
                    <TabPanel value = "4"> Item foure </TabPanel>
                    <TabPanel value = "5"> Item six </TabPanel>
                    <TabPanel value = "6"> item sevan </TabPanel>
            </TabContext>
        </Box>
    </div>
  )
}

