import React from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
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

export default function Cards() {
  const data = [
    {
      image: DigiBill,
      alt: "DigiBill",
      name: "Digi Bill",
    },
    {
      image: SmartPose,
      alt: "SmartPose",
      name: "Smart Pose",
    },
    {
      image: SmartMsg,
      alt: "SmartMsg",
      name: "Smart Messenger",
    },
    {
      image: CocaCola,
      alt: "CocaCola",
      name: "CocaCola Management",
    },
    {
      image: InApp,
      alt: "InApp",
      name: "In App",
    },
    {
      image: EBCM,
      alt: "EBCM",
      name: "EBCM",
    },
    {
      image: V_Cart,
      alt: "V_Cart",
      name: "V-Card",
    },
    {
      image: SmartCnt,
      alt: "SmartCnt",
      name: "Smart Connector",
    },
  ];

  const cardData = (cardData, key) => (
    <Grid key={key} item xs={4} sm={3} md={2.4} lg={2} xl={1.5}>
      <Card sx={{ maxWidth: 345 }} elevation={10}>
        <CardHeader
          avatar={
            <Avatar sx={{ height:35 }} aria-label="recipe" src="https://dsuabgmmtxmj1.cloudfront.net/companyweb/AdeonaLogo.png">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella  "
          subheader="September 14, 2016"
        />

        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={cardData.image}
            alt={cardData.alt}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. 
            </Typography>
          </CardContent>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
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
      </Container>
  
      
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
