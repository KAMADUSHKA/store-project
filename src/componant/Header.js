import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import { Button } from "bootstrap";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate;

  const user = useSelector((state) => state.auth.authData.userData.fname);

  console.log("user is a", user);

    const handleChange = () => {
     localStorage.removeItem("profile");
     navigate("/")
    }


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Avatar
              sx={{ height: 55, width: 55 }}
              aria-label="recipe"
              src="https://dsuabgmmtxmj1.cloudfront.net/companyweb/adeona_new_logo_circle.png"
            />
            &nbsp;&nbsp;
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Adeona Technogy
            </Typography>
            //////
            {/* <Typography>
              Welcome{user}
            </Typography> */}
             &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" onClick={handleChange}>
              Sign Out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        {/* <Search >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search> */}
      </Box>
    </>
  );
}
