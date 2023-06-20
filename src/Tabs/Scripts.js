import { Formik, Form } from "formik";
import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const initialData = [
  {
    Location: "John Doe",
    ServerIp: 30,
    ServerParth: "123-456-7890",
    Discription:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    Location: "John Doe",
    ServerIp: 30,
    ServerParth: "123-456-7890",
    Discription: "bbbbbbbbbbb",
  },
];

export default function Scripts() {
  const [data, setData] = useState(initialData);
  const [value, setValue] = React.useState("1");
  const [editIndex, setEditIndex] = useState(-1);
  const [editUser, setEditUser] = useState({
    Location: "",
    ServerIp: "",
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
                      name="Location"
                      label="Location"
                      value={values.Location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <br />
                    <br />
                    <TextField
                      name="ServerIp"
                      label="Server Ip"
                      value={values.ServerIp}
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
                        Location : {user.Location}
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        Server Ip : {user.ServerIp}
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        Upload File : {user.ServerParth}
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
