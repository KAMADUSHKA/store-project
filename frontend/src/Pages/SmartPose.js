import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SmartPose() {
  const [value, setValue] = React.useState('1'); 

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const [docType, setDocType] = React.useState('');

    const [truble, setTruble] = React.useState('');

    const item1Change = (event) => {
        setDocType(event.target.value);
    }

    const item2Change = (event) => {
        setTruble(event.target.value);
    }

  return (
    <div id='tabel'>

        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Log Paths" value="1" />
                        <Tab label="Services" value="2" />
                        <Tab label="Scripts" value="3" />
                        <Tab label="Database" value="4" />
                        <Tab label="Documentation" value="5" />
                        <Tab label="Troubleshooting Tips" value="6" />
                    </TabList>
                </Box>
                    <TabPanel value="1">
                        <span>Service : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                        <span>Server IP : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                        <span>Server Path : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                        <span>Description : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                    </TabPanel>

                    <TabPanel value="2">
                        <span>Service Name : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                        <span>Server IP : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                        <span>Servis Path : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                        <span>Related Commands : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                    </TabPanel>

                    <TabPanel value="3">
                        <span>location : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                        <span>Server IP : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                        <input type="file" /><br/><br/>
                        <span>Description : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                    </TabPanel>

                    <TabPanel value="4">
                        <span>DB Naame : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                        <span>DB IP/Service IP : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                        <span>Backup location : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                        <span>Description : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                    </TabPanel>

                    <TabPanel value="5">
                        <span>Document Title : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                        <span>Upload File : 

                                <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
                                        <InputLabel id="demo-simple-select-standard-label">Document Type</InputLabel>

                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={docType}
                                                onChange={item1Change}
                                                label="Age"
                                            >
                                        
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        
                                        </Select>
                                </FormControl>

                        </span><br/><br/>
                        <input type="file" /><br/><br/>
                        <span>Description : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                    </TabPanel>

                    <TabPanel value="6">
                        <span>Service Name : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                        <span>Issue Description : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                        <span>Resolving Procedure : <TextField  id="standard-basic" label="User Name" variant="standard" /> </span><br/><br/>
                        <span>Upload File : 

                                <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
                                        <InputLabel id="demo-simple-select-standard-label">Troubleshooting Type</InputLabel>

                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={truble}
                                                onChange={item2Change}
                                                label="Age"
                                            >
                                        
                                        <MenuItem value={10}>Not</MenuItem>
                                        <MenuItem value={20}>Mandatory</MenuItem>
                                        
                                        </Select>
                                </FormControl>

                        </span><br/><br/>
                    </TabPanel>
            </TabContext>
        </Box>

    </div>
  );
};

