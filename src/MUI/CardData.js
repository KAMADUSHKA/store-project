import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";

export default function CardData() {
  return (
    <>
      <form>
        <Card sx={{ borderRadius: 6 }}>
          <CardHeader
            title="Card Data"
            subheader="Add data of the Card"
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
                <Grid xs={12} md={6} padding={1}>
                  <TextField
                    fullWidth
                    label="Card Name"
                    name="firstName"
                    required
                  />
                </Grid>
                <Grid xs={12} md={6} padding={1} >
                  <TextField
                    fullWidth
                    label="Card Details"
                    name="Detail"
                    required
                  />
                </Grid>
                <Divider />
                <Button
                  variant="contained"
                  sx={{
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    margin:'auto',
                    borderRadius: 3
                  }}
                >
                  Create Card
                </Button>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </form>
    </>
  );
}
