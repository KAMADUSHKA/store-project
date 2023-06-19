import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Card, Grid, autocompleteClasses } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";

const logParth = [
  {
    Service:'*******',
    ServiceIp:'192.169.12.15',
    ServerParth:'1111111111',
    Discription:'aaaaaaaaaaaaaaaaaaa'
  },
  {
    Service:'1*******',
    ServiceIp:'192.169.12.15',
    ServerParth:'22222222222',
    Discription:'bbbbbbbbbbbb'
  }
]

export default function DigiBill() {
  const [value, setValue] = React.useState("1");

  const Navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [docType, setDocType] = React.useState("");

  const [truble, setTruble] = React.useState("");

  const item1Change = (event) => {
    setDocType(event.target.value);
  };

  const item2Change = (event) => {
    setTruble(event.target.value);
  };

  return (
    <Grid>
      <Button
        variant="contained"
        sx={{ margin: 4 }}
        onClick={() => {
          Navigate("/Cards");
        }}
      >
        {" < "} back{" "}
      </Button>
      <Grid container marginTop={4} spacing={2}>
        <Grid item xs={12} >
        <Grid container margin={5} >
        <Grid  item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box sx={{ maxwidth:'xs', typography: "body1" }} >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Log Paths" value="1" />
                <Tab label="Services" value="2" />
                <Tab label="Scripts" value="3" />
                <Tab label="Database" value="4" />
                <Tab label="Documentation" value="5" />
                <Tab label="Troubleshooting Tips" value="6" />
              </TabList>
            </Box>

            <TabPanel value="1">
              <span>eeeeeeeeeeeeeeeeeeeeeee</span>
            </TabPanel>

            <TabPanel value="2">
              <span>sssssssssssssssssssssssssss</span>
              <br />
              <br />
            </TabPanel>

            <TabPanel value="3">
              <span>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</span>
              <br />
              <br />
            </TabPanel>

            <TabPanel value="4">
              <span>aaaaaaaaaaaaaaaaaaaaaaaa</span>

              <br />
              <br />
            </TabPanel>

            <TabPanel value="5">
              <span>qqqqqqqqqqqqqqqqqqqqqqqqqq</span>
              <br />
              <br />
            </TabPanel>

            <TabPanel value="6">
              <span>rrrrrrrrrrrrrrrrrrrrrr</span>
              <br />
              <br />
            </TabPanel>
          </TabContext>
        </Box>
        </Grid></Grid>
        </Grid>
      </Grid>
      <br />
      <br />
    </Grid>
  );
}
