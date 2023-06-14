import React, { useState } from "react";
import "../Style/Style.css";
import AdeonaLogo from "../componant/AdeonaLogo.png";

import {
  Grid,
  Paper,
  Button,
  InputAdornment,
  IconButton,
  Stack,
  Typography,
  useMediaQuery
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ModifiedTextField } from "../Theam/Theam";
import { useTheme } from "@mui/material/styles";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const paperStyle = {
    padding: 5,
    maxWidth: { xs: 400, lg: 475 },
    margin: { xs: 2.5, md: 3 },
    borderRadius: 8,
    "& > *": {
      flexGrow: 1,
      flexBasis: "50%",
    },
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (values, setSubmitting) => {
    setSubmitting(false);
    console.log("User Data:", values);
    window.location.href = "/Cards";
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().max(255).required("Username is required"),
    password: Yup.string()
      .max(255)
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) =>
          handleLogin(values, setSubmitting)
        }
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                <Paper elevation={10} sx={paperStyle}>
                  <Grid align={"center"} marginTop={4}>
                    <img alt="" src={AdeonaLogo} height={70} width={110} />
                    <Typography fontSize="40px">Login</Typography>
                    <Grid item>
                      <Stack
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                      >
                        <Typography
                          fontWeight="bold"
                          color={theme.palette.primary.main}
                          gutterBottom
                          variant={matchDownSM ? "h3" : "h2"}
                        >
                          Hi, Welcome
                        </Typography>
                        <Typography
                          variant="caption"
                          fontSize="16px"
                          textAlign={matchDownSM ? "center" : "inherit"}
                        >
                          Enter your credentials to continue
                        </Typography>
                      </Stack>
                    </Grid>
                    <br />
                    <ModifiedTextField
                      id="outlined-basic"
                      label="User Name"
                      name="username"
                      placeholder="Enter Your UserName"
                      variant="outlined"
                      fullWidth
                      value={values.username}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      helperText={errors.username}
                      error={Boolean(touched.username && errors.username)}
                    />
                    <br />
                    <br />
                    <ModifiedTextField
                      id="outlined-basic"
                      label="Password"
                      name="password"
                      placeholder="Enter your Password"
                      variant="outlined"
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      helperText={errors.password}
                      error={Boolean(touched.password && errors.password)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={togglePasswordVisibility}>
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <br />
                    <br />
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{ borderRadius: 3 }}
                    >
                      LOGIN
                    </Button>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}
