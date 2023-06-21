import { Formik, Form } from "formik";
import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const initialData = [
  {
    ServiceName: "John Doe",
    ServiceIp: 30,
    ServerParth: "123-456-7890",
    RelatedCommands:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    ServiceName: "John Doe",
    ServiceIp: 30,
    ServerParth: "123-456-7890",
    RelatedCommands: "bbbbbbbbbbb",
  },
];

export default function Services() {
  const [data, setData] = useState(initialData);
  const [value, setValue] = React.useState("1");
  const [editIndex, setEditIndex] = useState(-1);
  const [editUser, setEditUser] = useState({
    ServiceName: "",
    ServiceIp: "",
    ServerParth: "",
    RelatedCommands: "",
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
                sx={{ borderRadius: 6 }}
              >
                {editIndex === index ? (
                  <>
                    <TextField
                      name="ServiceName"
                      label="Service Name"
                      value={values.ServiceName}
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
                      name="RelatedCommands"
                      label="Related Commands"
                      value={values.RelatedCommands}
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
                      sx={{ borderRadius: 3 }}
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
                        Service Name : {user.ServiceName}
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
                        Related Commands : {user.RelatedCommands}
                      </Typography>
                    </Grid>
                    <br />
                    <Button
                      type="button"
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit(index)}
                      onLoad={isSubmitting}
                      sx={{ borderRadius: 3 }}
                    >
                      Edit
                    </Button>
                  </>
                )}
              </Paper>
            ))}
            <Button
              variant="contained"
              onClick={handleAdd}
              sx={{ borderRadius: 3 }}
            >
              Add User
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
