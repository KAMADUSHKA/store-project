import React, { useState } from "react";
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

const initialData = [
  {
    Service: "John Doe",
    ServiceIp: 30,
    ServerParth: "123-456-7890",
    Discription: "aaaaaaaaaaaaaaaaaaa",
  },
  {
    Service: "John Doe",
    ServiceIp: 30,
    ServerParth: "123-456-7890",
    Discription: "bbbbbbbbbbb",
  },
];

const logParth = [
  {
    Service: "*******",
    ServiceIp: "192.169.12.15",
    ServerParth: "1111111111",
    Discription: "aaaaaaaaaaaaaaaaaaa",
  },
  {
    Service: "1*******",
    ServiceIp: "192.169.12.15",
    ServerParth: "22222222222",
    Discription: "bbbbbbbbbbbb",
  },
];

const Services = [
  {
    ServiceName: "*******",
    ServiceIp: "192.169.12.15",
    ServerParth: "1111111111",
    RelatedCommands: "aaaaaaaaaaaaaaaaaaa",
  },
  {
    ServiceName: "1*******",
    ServiceIp: "192.169.12.15",
    ServerParth: "22222222222",
    RelatedCommands: "bbbbbbbbbbbb",
  },
];

export default function DigiBill() {
  const [value, setValue] = React.useState("1");
  const [data, setData] = useState(initialData);
  const [editIndex, setEditIndex] = useState(-1);
  const [editUser, setEditUser] = useState({
    Service: "",
    ServiceIp: "",
    ServerParth: "",
    Discription: "",
  });

  const Navigate = useNavigate();

  const [docType, setDocType] = React.useState("");

  const [truble, setTruble] = React.useState("");

  const item1Change = (event) => {
    setDocType(event.target.value);
  };

  const item2Change = (event) => {
    setTruble(event.target.value);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditUser(data[index]);
  };

  const handleChange1 = (event, newValue) => {
    setValue(newValue);
}

  const handleChange = (e,values) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
    const newData = [...data];
    newData[editIndex] = editUser;
    setData(newData);
    setEditIndex(-1);
    console.log(values);
  };

  const handleAdd = () => {
    const newData = [...data, initialData];
    setData(newData);
  };

  const handledata = (setFieldValue, name, e) => {
    // setEditUser({ ...editUser, [e.target.name]: e.target.value });
    setFieldValue(name, e)
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
      <Grid container marginTop={3} spacing={2}>
        <Grid item xs={12}>
          <Grid container margin={5}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box sx={{ maxwidth: "xs", typography: "body1" }} >
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
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
                    <Formik
                    enableReinitialize={true}
                      initialValues={editUser}
                      onSubmit={(values) => console.log(values)}
                    >
                      {({
                        values,
                        isSubmitting,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isValid,
                        setFieldValue,
                      }) => (
                        <Form>
                          {data.map((user, index) => (
                            <Paper
                              key={index}
                              elevation={5}
                              style={{ padding: "16px", marginBottom: "16px" }}
                            >
                              {editIndex === index ? (
                                <>
                                  <TextField
                                    name="Service"
                                    label="Service"
                                    value={values.Service}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <br />
                                  <br />
                                  <TextField
                                    name="ServiceIp"
                                    label="ServiceIp"
                                    value={values.ServiceIp}
                                    onChange={handleChange}
                                  />
                                  <br />
                                  <br />
                                  <TextField
                                    name="ServerParth"
                                    label="ServerParth"
                                    value={values.ServerParth}
                                    onChange={handleChange}
                                  />
                                  <br />
                                  <br />
                                  <TextField
                                    name="Discription"
                                    label="Discription"
                                    value={values.Discription}
                                    onChange={handleChange}
                                  />
                                  <br />
                                  <br />
                                  <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    onChange={handleChange}
                                  >
                                    Save
                                  </Button>
                                </>
                              ) : (
                                <>
                                  <Typography variant="body1">
                                    Name: {user.Service}
                                  </Typography>
                                  <br />
                                  <Typography variant="body1">
                                    Age: {user.ServiceIp}
                                  </Typography>
                                  <br />
                                  <Typography variant="body1">
                                    Mobile Number: {user.ServerParth}
                                  </Typography>
                                  <br />
                                  <Typography variant="body1">
                                    Mobile Number: {user.Discription}
                                  </Typography>
                                  <br />
                                  <Button
                                  type="button"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleEdit(index)}
                                  >
                                    Edit
                                  </Button>
                                </>
                              )}
                            </Paper>
                          ))}
                          <Button variant="contained" onClick={handleAdd}>
                            Add User
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  </TabPanel>

                  <TabPanel value="2">
                    <span>wdddddddddd</span>
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <br />
    </Grid>
  );
}
