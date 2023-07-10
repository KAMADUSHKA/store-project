import { Formik, Form } from "formik";
import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const initialData = [
  {
    DBName: "John Doe",
    DBIP_ServerIp: 30,
    BackupLocation: "123-456-7890",
    Discription:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
];

export default function Database() {
  const [data, setData] = useState(initialData);
  const [value, setValue] = React.useState("1");
  const [editIndex, setEditIndex] = useState(-1);
  const [editUser, setEditUser] = useState({
    DBName: "",
    DBIP_ServerIp: "",
    BackupLocation: "",
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
                      name="DBName"
                      label="DB Name"
                      value={values.DBName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <br />
                    <br />
                    <TextField
                      name="DBIP_ServerIp"
                      label="DB IP /Server Ip"
                      value={values.DBIP_ServerIp}
                      onChange={handleChange}
                    />
                    <br />
                    <br />
                    <TextField
                      name="BackupLocation"
                      label="Backup Location"
                      value={values.BackupLocation}
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
                      // onLoad={isSubmitting}
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
                        DB Name : {user.DBName}
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        DB IP /Server Ip : {user.DBIP_ServerIp}
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        Backup Location : {user.BackupLocation}
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
                      // onLoad={isSubmitting}
                      sx={{ borderRadius: 3 }}
                    >
                      Edit
                    </Button>
                  </>
                )}
              </Paper>
            ))}
          </Form>
        )}
      </Formik>
    </>
  );
}
