import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button, InputLabel, ListItemText, TextField, ListItem, List, Typography } from '@mui/material';
import { Form, Formik } from 'formik';

const initialData = [
  { Service: 'John Doe', ServiceIp: 30, ServerParth: '123-456-7890', Discription: 'aaaaaaaaaaaaaaaaaaa' },
  { Service: 'John Doe', ServiceIp: 30, ServerParth: '123-456-7890', Discription: 'bbbbbbbbbbb' },
];

export default function SmartMsg() {

  const [data, setData] = useState(initialData);
  const [editIndex, setEditIndex] = useState(-1);
  const [editUser, setEditUser] = useState({ Service: '', ServiceIp: '', ServerParth:'' , Discription:'' });

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditUser(data[index]);
  };

  const handleChange = () => {
    const newData = [...data];
    newData[editIndex] = editUser;
    setData(newData);
    setEditIndex(-1);
    setEditUser(initialData);
    // console.log(newData); 
  };

  const handleAdd = () => {
    const newData = [...data, initialData];
    setData(newData);
  };

  const handledata = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };


  // const handleSave = (values) => {
  //   console.log("User Data:", values);
    
  // };

  
  return (
    <>
    <Formik
    initialValues={{ Service: '', ServiceIp: '', ServerParth:'' , Discription:'' }}
    onSubmit={(values) => handleChange(values)}
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
        <Paper key={index} elevation={10} style={{ padding: '16px', marginBottom: '16px' }}>
          {editIndex === index ? (
            <>
              <TextField name="Service" label="Service" value={editUser.Service} onChange={handledata} /><br/><br/>
              <TextField name="ServiceIp" label="ServiceIp" value={editUser.ServiceIp} onChange={handledata} /><br/><br/>
              <TextField name="ServerParth" label="ServerParth" value={editUser.ServerParth} onChange={handledata} /><br/><br/>
              <TextField name="Discription" label="Discription" value={editUser.Discription} onChange={handledata} /><br/><br/>
              <Button type='submit' variant="contained" color="primary">
                Save
              </Button>
            </>
          ) : (
            <>
              <Typography variant="body1">Name: {user.Service}</Typography><br/>
              <Typography variant="body1">Age: {user.ServiceIp}</Typography><br/>
              <Typography variant="body1">Mobile Number: {user.ServerParth}</Typography><br/>
              <Typography variant="body1">Mobile Number: {user.Discription}</Typography><br/>
              <Button variant="contained" color="primary" onClick={() => handleEdit(index)}>
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
  )
}

