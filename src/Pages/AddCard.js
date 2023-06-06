import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ProfileData from "../MUI/CardImage";
import CardData from "../MUI/CardData";

export default function AddCard() {
  return (
    <>
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
                <Grid xs={12} sm={5} md={4} lg={3} xl={2} margin={2}> 
                  <ProfileData />
                </Grid>
                <Grid xs={12} sm={5} md={6} lg={6} xl={8} margin={2}>
                  < CardData />
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
