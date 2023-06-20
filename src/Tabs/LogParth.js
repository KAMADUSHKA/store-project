import { Formik, Form } from "formik";
import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const initialData = [
  {
    Service: "John Doe",
    ServiceIp: 30,
    ServerParth: "123-456-7890",
    Discription:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    Service: "John Doe",
    ServiceIp: 30,
    ServerParth: "123-456-7890",
    Discription: "bbbbbbbbbbb",
  },
];

export default function LogParth() {
  const [data, setData] = useState(initialData);
  const [value, setValue] = React.useState("1");
  const [editIndex, setEditIndex] = useState(-1);
  const [editUser, setEditUser] = useState({
    Service: "",
    ServiceIp: "",
    ServerParth: "",
    Discription: "",
  });

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditUser(data[index]);
  };

  const handleChange = (e, values) => {
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

  return (
    <>
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
                      label="Service Ip"
                      value={values.ServiceIp}
                      onChange={handleChange}
                    />
                    <br />
                    <br />
                    <TextField
                      name="ServerParth"
                      label="Server Parth"
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
                      onLoad={isSubmitting}
                    >
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    <Grid align={"left"}>
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        Service : {user.Service}
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        Server Ip : {user.ServiceIp}
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        Server Parth : {user.ServerParth}
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        Discription : {user.Discription}
                      </Typography>
                    </Grid>
                    <br />
                    <Button
                      type="button"
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit(index)}
                      onLoad={isSubmitting}
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
    </>
  );
}
