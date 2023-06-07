import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,

  Typography,
} from "@mui/material";
import React, {useRef, useState} from "react";
import { ModifiedTextField } from "../Theam/Theam";

import { Formik, useField, useFormikContext } from "formik";
import * as Yup from "yup";

export default function AddCard( name) {
  const handleCreating = (values) => {
    console.log("User Data:", values);
  };

  const validationSchema = Yup.object().shape({
    cardName: Yup.string().required("Username is required"),
    cardDetails: Yup.string().required("Username is required"),
  });

  // const fileInput = useRef(null);
  // const {setFiledValue} = useFormikContext();
  // const [ field, meta ] = useField(name);
  // const [ url, setUrl] = useState(null);
  

  // const handleUpload = (e) => {
  //   const {files: newFiles} = e.target;
  //   if(newFiles.length){
  //     setFiledValue(name, newFiles[0])
  //     setUrl(URL.createObjectURL(newFiles[0]))
  //   }
  // }

  return (
    <>
      <Formik
        initialValues={{ cardName: "", cardDetails: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleCreating(values)}
      >
        {({
          errors,
          touched,
          values,
          isSubmitting,
          handleBlur,
          handleChange,
          handleSubmit,
          isValid,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                py: 8,
              }}
            >
              <Container maxWidth="lg" sx={{ padding: 6 }}>
                <Stack spacing={3}>
                  <div>
                    <Typography variant="h4">Add Card</Typography>
                    <br />
                  </div>
                  <div>
                    <Grid
                      container
                      spacing={2}
                      sx={{ justifyContent: "space-around" }}
                    >
                      <Grid item xs={12} sm={5} md={4} lg={4} xl={3} margin={2}>
                        <Card sx={{ borderRadius: 6 }}>
                          <CardContent>
                            <Box
                              sx={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Avatar
                                src='https://dsuabgmmtxmj1.cloudfront.net/companyweb/adeona_new_logo_circle.png'
                                sx={{
                                  height: 110,
                                  mb: 2,
                                  width: 110,
                                }}
                              />
                            </Box>
                          </CardContent>
                          <Divider />
                          <CardActions>
                            <Button fullWidth variant="text">
                              Upload picture
                            </Button>
                            <input
                                type="file"
                                // ref={fileInput}
                                // onChange={handleUpload}
                                title=""
                                value=""
                               style={{display:"block", opacity: 0, width: 0}}
                                />
                          </CardActions>
                        </Card>
                      </Grid>
                      <Grid item xs={12} sm={5} md={6} lg={7} xl={8} margin={2}>
                        <Card sx={{ borderRadius: 6 }}>
                          <CardHeader
                            title="Card Data"
                            subheader="Add data of your Card"
                          ></CardHeader>
                          <CardContent>
                            <Box
                              sx={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Grid container spacing={1}>
                                <Grid item xs={12} md={6} padding={1}>
                                  <ModifiedTextField
                                    fullWidth
                                    label="Card Name"
                                    name="cardName"
                                    value={values.cardName}
                                    onBlur={handleBlur}
                                    helperText={errors.cardName}
                                    onChange={handleChange}
                                    error={Boolean(
                                      touched.cardName && errors.cardName
                                    )}
                                    required
                                  />
                                </Grid>
                                <Grid item xs={12} md={6} padding={1}>
                                  <ModifiedTextField
                                    fullWidth
                                    label="Card Details"
                                    name="cardDetails"
                                    value={values.cardDetails}
                                    onBlur={handleBlur}
                                    helperText={errors.cardDetails}
                                    onChange={handleChange}
                                    error={Boolean(
                                      touched.cardDetails && errors.cardDetails
                                    )}
                                    required
                                  />
                                </Grid>
                                <Divider />
                                <Button
                                  type="submit"
                                  variant="contained"
                                  // disabled={isSubmitting}
                                  disabled={!(isValid || isSubmitting)}
                                  sx={{
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    margin: "auto",
                                    borderRadius: 3,
                                  }}
                                >
                                  Create Card
                                </Button>
                               
                              </Grid>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </div>
                </Stack>
              </Container>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
}
