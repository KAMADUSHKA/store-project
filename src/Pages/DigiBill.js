import React, { useState ,lazy, Suspense } from "react";
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
import {
  Button,
  Card,
  Grid,
  Paper,
  Typography,
  autocompleteClasses,
} from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
// import LogParth from "../Tabs/LogParth";
const LogParth = lazy(() => import("../Tabs/LogParth"));
// import Scripts from "../Tabs/Scripts";
const Scripts = lazy(() => import("../Tabs/Scripts"))
// import Documentation from "../Tabs/Documentation";
const Documentation = lazy(() => import("../Tabs/Documentation"))
// import Troubleshooting from "../Tabs/TrobleShooting";
const Troubleshooting = lazy(() => import("../Tabs/TrobleShooting"))
// import Services from "../Tabs/Services";
const Services = lazy(() => import("../Tabs/Services"))
// import Database from "../Tabs/Database";
const Database = lazy(() => import("../Tabs/Database"))

export default function DigiBill() {
  const Navigate = useNavigate();
  const [value, setValue] = React.useState("1");

  const [docType, setDocType] = React.useState("");

  const [truble, setTruble] = React.useState("");

  const item1Change = (event) => {
    setDocType(event.target.value);
  };

  const item2Change = (event) => {
    setTruble(event.target.value);
  };
  const handleChange1 = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid>
      <Button
        variant="contained"
        sx={{ marginTop: 4, marginLeft: 4,  borderRadius: 3, marginBottom: 3 }}
        onClick={() => {
          Navigate("/Cards");
        }}
      >
        {" < "} back{" "}
      </Button>
      {/* <Grid container marginTop={3} spacing={2}>
        <Grid item xs={12}>
          <Grid container margin={5}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}> */}

      <Grid container>
        <Grid item xs={12} align={"center"}>
          <Box
            sx={{
              maxWidth: { xs: 420, sm: 500, md: 780, xl: 1080 },
              typography: "body1",
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  variant="scrollable"
                  scrollButtons="auto"
                  onChange={handleChange1}
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
                <Suspense fallback={<div>loading...</div>}>
                <LogParth />
                </Suspense>
              </TabPanel>

              <TabPanel value="2">
              <Suspense fallback={<div>loading...</div>}>
                <Services/>
                </Suspense>
              </TabPanel>

              <TabPanel value="3">
              <Suspense fallback={<div>loading...</div>}>
                <Scripts/>
                </Suspense>
              </TabPanel>

              <TabPanel value="4">
              <Suspense fallback={<div>loading...</div>}>
                <Database/>
                </Suspense>
              </TabPanel>

              <TabPanel value="5">
              <Suspense fallback={<div>loading...</div>}>
                <Documentation/>
                </Suspense>
              </TabPanel>

              <TabPanel value="6">
              <Suspense fallback={<div>loading...</div>}>
                <Troubleshooting/>
                </Suspense>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
      {/*</Grid>
      </Grid> */}
      <br />
      <br />
    </Grid>
  );
}
