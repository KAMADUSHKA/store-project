import { Grid, Paper } from "@mui/material";
import React from "react";

export default function Cards() {

    const paperStyle = {
        padding: 8,
        // maxWidth: { xs: 400, lg: 475 },
        margin: { xs: 2.5, md: 3 },
        borderRadius: 8,
        "& > *": {
          flexGrow: 1,
          flexBasis: "50%",
        },
      };

  return (
    <Grid container justifyContent="center" alignItems="center" >
      <Grid display={"flex"}>
        <Paper elevation={10} sx={paperStyle}>efdcdewfed</Paper>
        <Paper elevation={10} sx={paperStyle}>efdcdewfed</Paper>
        <Paper elevation={10} sx={paperStyle}>efdcdewfed</Paper>
        <Paper elevation={10} sx={paperStyle}>efdcdewfed</Paper>
        
      </Grid>
    </Grid>
  );
}
