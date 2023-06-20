import { Formik, Form } from "formik";
import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const initialData = [
  {
    ServiceName: "John Doe",
    IssueDiscription: 30,
    ResolvingProcedure: "123-456-7890",
    FileUpload:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    ServiceName: "John Doe",
    IssueDiscription: 30,
    ResolvingProcedure: "123-456-7890",
    FileUpload: "bbbbbbbbbbb",
  },
];

export default function Troubleshooting() {
  const [data, setData] = useState(initialData);
  const [value, setValue] = React.useState("1");
  const [editIndex, setEditIndex] = useState(-1);
  const [editUser, setEditUser] = useState({
    ServiceName: "",
    IssueDiscription: "",
    ResolvingProcedure: "",
    FileUpload: "",
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
                      name="ServiceName"
                      label="ServiceName"
                      value={values.ServiceName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <br />
                    <br />
                    <TextField
                      name="IssueDiscription"
                      label="IssueDiscription"
                      value={values.IssueDiscription}
                      onChange={handleChange}
                    />
                    <br />
                    <br />
                    <TextField
                      name="ResolvingProcedure"
                      label="ResolvingProcedure"
                      value={values.ResolvingProcedure}
                      onChange={handleChange}
                    />
                    <br />
                    <br />
                    <TextField
                      name="FileUpload"
                      label="FileUpload"
                      value={values.FileUpload}
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
                        Service Name : {user.ServiceName}
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        Issue Discription : {user.IssueDiscription}
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        Resolving Procedure : {user.ResolvingProcedure}
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        FileUpload : {user.FileUpload}
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
