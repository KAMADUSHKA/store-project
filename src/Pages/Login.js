import React, { useState } from "react";
import "../Style/Style.css";
import AdeonaLogo from "../componant/AdeonaLogo.png";
import TextField from "@mui/material/TextField";
import {
  Grid,
  Paper,
  Button,
  InputAdornment,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ModifiedTextField } from "../Theam/Theam";
import { useTheme } from "@mui/material/styles";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginAttempted, setLoginAttempted] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    setLoginAttempted(true);
  };

  if (username.trim() === "" || password.trim() === "") {
  }

  const isUsernameInvalid = loginAttempted && username.trim() === "";
  const isPasswordInvalid = loginAttempted && password.trim() === "";

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
          <Paper elevation={10} sx={paperStyle}>
            <Grid align={"center"} marginTop={4}>
              <img alt="" src={AdeonaLogo} height={70} width={110} />
              <Typography fontSize="40px">Login</Typography>
              <Grid item>
                <Stack alignItems="center" justifyContent="center" spacing={1}>
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
                placeholder="Enter Your UserName"
                variant="outlined"
                fullWidth
                value={username}
                onChange={handleUsernameChange}
                error={isUsernameInvalid}
                helperText={isUsernameInvalid && "Username is required"}
              />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="Password"
                placeholder="Enter your Password"
                variant="outlined"
                fullWidth
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                error={isPasswordInvalid}
                helperText={isPasswordInvalid && "Password is required"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <br />
              <br />
              <Button
                variant="contained"
                fullWidth
                sx={{ borderRadius: 3 }}
                onClick={handleLogin}
              >
                LOGIN
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
