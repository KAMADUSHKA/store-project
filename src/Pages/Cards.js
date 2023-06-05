import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Pagination,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import DigiBill from "../componant/DigiBill.png";
import SmartPose from "../componant/SmartPose.png";
import SmartMsg from "../componant/smartMsg.png";
import CocaCola from "../componant/CocaCola.png";
import InApp from "../componant/InApp.png";
import EBCM from "../componant/EBCM.png";
import V_Cart from "../componant/V_Cart.png";
import SmartCnt from "../componant/SmartCnt.png";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import { Margin } from "@mui/icons-material";

const dataCard = [
  {
    image: DigiBill,
    alt: "DigiBill",
    name: "Digi Bill",
    content: "This impressive paella is a  fgfdtgy ytfgyugy ytftgy",
  },
  {
    image: SmartPose,
    alt: "SmartPose",
    name: "Smart Pose",
    content: "This impressive paella is a  fgfdtgy ytfgyugy ytftgy",
  },
  {
    image: SmartMsg,
    alt: "SmartMsg",
    name: "Smart Messenger",
    content: "This impressive paella is a  fgfdtgy ytfgyugy ytftgy",
  },
  {
    image: CocaCola,
    alt: "CocaCola",
    name: "CocaCola Management",
    content: "This impressive paella is a  fgfdtgy ytfgyugy ytftgy  ",
  },
  {
    image: InApp,
    alt: "InApp",
    name: "In App",
    content: "This impressive paella is a ",
  },
  {
    image: EBCM,
    alt: "EBCM",
    name: "EBCM",
    content:
      "This impressive paella is a  fgfdtgy ytfgyugy ytftgy This impressive paella is a This impressive paella is a ABC SAB",
  },
  {
    image: V_Cart,
    alt: "V_Cart",
    name: "V-Card",
    content: "This impressive paella is a  fgfdtgy ytfgyugy ytftgy",
  },
  {
    image: SmartCnt,
    alt: "SmartCnt",
    name: "Smart Connector",
    content: "This impressive paella is a  fgfdtgy ytfgyugy ytftgy",
  },
];




export default function Cards() {
  const [page, setPage] = React.useState(1);
  let [ data, setData] =useState([]);


  // useEffect(() => {
  //   setData(dataCard.slice(0, 4));
  // }, [page]);


  const handleChange = (event, value) => {
    setPage(value);

    const startCard = (value - 1)*4;
    const endCard = startCard + 4
    setData(dataCard.slice(startCard,endCard));
    
  };

  const cardData = (cardData, key) => (
    <Grid key={key} item xs={6} sm={4} md={3} lg={2.4} xl={2.4}>
      <Card sx={{ Width: 345, height: 300, borderRadius: 6 }} elevation={10}>
        <CardActionArea sx={{ height: 300 }}>
          <CardHeader
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              height: 140,
              overflow: "hidden",
            }}
            avatar={
              <Avatar
                sx={{ height: 55, width: 55 }}
                aria-label="recipe"
                src="https://dsuabgmmtxmj1.cloudfront.net/companyweb/adeona_new_logo_circle.png"
              />
            }
            title={
              <Typography gutterBottom variant="h5" component="h2">
                {cardData.name}
              </Typography>
            }
            subheader="06,14,2023"
          />
          <Tooltip title={cardData.content}>
            <CardContent sx={{ height: 40 }}>
              <Typography variant="body2" color="text.secondary">
                {cardData.content.substring(0, 80) +
                  (cardData.content.length > 80 ? "..." : "")}
              </Typography>
            </CardContent>
          </Tooltip>
          <CardActions sx={{}}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );

 

  //======//

  return (
    <>
      <Container>
        <Grid container spacing={2} marginTop={3}>
          {data.map((card, key) => cardData(card, key))}
        </Grid>

        <br />
        <br />

        <Stack spacing={2}>
          <Typography>Page: {page}</Typography>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
      </Container>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
