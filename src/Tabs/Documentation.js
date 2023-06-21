import { Formik, Form } from "formik";
import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";

const initialData = [
  {
    DocumentTitle: "John Doe",
    DocumentType: 30,
    FileUpload: "123-456-7890",
    Discription:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    DocumentTitle: "John Doe",
    DocumentType: 30,
    FileUpload: "123-456-7890",
    Discription: "bbbbbbbbbbb",
  },
];

export default function Documentation() {
  const [data, setData] = useState(initialData);
  const [type, setType] = React.useState("");
  const [value, setValue] = React.useState("1");
  const [editIndex, setEditIndex] = useState(-1);
  const [editUser, setEditUser] = useState({
    DocumentTitle: "",
    DocumentType: "",
    FileUpload: "",
    Discription: "",
  });

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditUser(data[index]);
  };

  const handleChange = (e, values, event) => {
    setType(event.target.value);
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

  const handleUploadClick = () => {
    fileInputField.current.click();
  };

  const fileInputField = useRef(null);

  const handleUpload = (e, setFiledValue) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      setFiledValue("FileUpload", newFiles[0]);
      setUrl(URL.createObjectURL(newFiles[0]));
    }
  };

  const [url, setUrl] = useState(null);

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

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
                      name="DocumentTitle"
                      label="Document Title"
                      value={values.DocumentTitle}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <br />
                    <br />
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl sx={{ width: 220 }}>
                        <InputLabel id="demo-simple-select-label">
                          Document Type
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="DocumentType"
                          value={values.DocumentType}
                          label="Age"
                          onChange={handleChange}
                        >
                          <MenuItem value={0}>API</MenuItem>
                          <MenuItem value={1}>Manual</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <br />
                    <br />
                    <Button
                      variant="outlined"
                      onClick={handleUploadClick}
                      sx={{
                        paddingLeft: 5,
                        paddingRight: 5,
                        paddingTop: 1.5,
                        paddingBottom: 1.5,
                      }}
                    >
                      Upload File
                    </Button>
                    <input
                      type="file"
                      ref={fileInputField}
                      onChange={(e) => handleUpload(e, setFieldValue)}
                      title=""
                      value=""
                      style={{ display: "block", opacity: 0, width: 0 }}
                    />

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
                        Document Title : {user.DocumentTitle}
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        Document Type : {user.DocumentType}
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        File Upload : {user.FileUpload}
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
