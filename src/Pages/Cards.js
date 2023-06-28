import React, { useState, useEffect } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
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
  Toolbar,
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useNavigate } from "react-router-dom";

const dataCard = [
  {
    id:1,
    image: DigiBill,
    alt: "DigiBill",
    cardName: "Digi Bill",
    cardDetails: "This impressive paella is a  fgfdtgy ytfgyugy ytftgy",
    route: "/DigiBill"
  },
  {
    id:2,
    image: SmartPose,
    alt: "SmartPose",
    cardName: "Smart Pose",
    cardDetails: "This impressive paella is a  fgfdtgy ytfgyugy ytftgy",
    route: "/SmartPose"
  },
  {
    id:3,
    image: SmartMsg,
    alt: "SmartMsg",
    cardName: "Smart Messenger",
    cardDetails: "This impressive paella is a  fgfdtgy ytfgyugy ytftgy",
    route: "/SmartMsg"
  },
  {
    id:4,
    image: CocaCola,
    alt: "CocaCola",
    cardName: "CocaCola Management",
    cardDetails: "This impressive paella is a  fgfdtgy ytfgyugy ytftgy  ",
    route: "/CocaCola"
  },
  {
    id:5,
    image: InApp,
    alt: "InApp",
    cardName: "In App",
    cardDetails: "This impressive paella is a ",
    route: "/InApp"
  },
  {
    id:6,
    image: EBCM,
    alt: "EBCM",
    cardName: "EBCM",
    cardDetails:
      "This impressive paella is a  fgfdtgy ytfgyugy ytftgy This impressive paella is a This impressive paella is a ABC SAB",
      route: "/EBCM"
  },
  {
    id:7,
    image: V_Cart,
    alt: "V_Cart",
    cardName: "V-Card",
    cardDetails: "This impressive paella is a  fgfdtgy ytfgyugy ytftgy",
    route: "/V_Cart"
  },
  {
    id:8,
    image: SmartCnt,
    alt: "SmartCnt",
    cardName: "Smart Connector",
    cardDetails: "This impressive paella is a  fgfdtgy ytfgyugy ytftgy",
    route: "/SmartCnt"
  },
];




export default function Cards() {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  let [data, setData] = useState([]);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  useEffect(() => {
    setData(dataCard.slice(0, 4));
  }, []);

  const handleChange = (event, value) => {
    setPage(value);

    const startCard = (value - 1) * 4;
    const endCard = startCard + 4;
    setData(dataCard.slice(startCard, endCard));
  };



  const cardData = (item, key) => (
    <Grid key={key} item xs={6} sm={4} md={3} lg={2.4} xl={2.4}>
      <Card sx={{ Width: 345, height: 300, borderRadius: 6 }} elevation={10}>
      <CardActionArea>
        <Box sx={{ height: 300 }}  onClick={() => {navigate(`/DigiBill/${item.id}`)}}>
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
                {item.cardName}
              </Typography>
            }
            subheader="06,14,2023"
          />
          
          <Tooltip title={item.cardDetails}>
            <CardContent sx={{ height: 40 }}>
              <Typography variant="body2" color="text.secondary">
                {item.cardDetails.substring(0, 80) +
                  (item.cardDetails.length > 80 ? "..." : "")}
              </Typography>
            </CardContent>
          </Tooltip>
          {/* <CardActions>         
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </CardActions> */}
        </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );

  //======//

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
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
        <br />
        <Button
          variant="contained"
          sx={{ position: "absolute", right: 10, borderRadius: 2 }}
          onClick={() => {
            navigate("/AddCard");
          }}
        >
          + Add Card
        </Button>
        <br />
        <Grid container spacing={2} marginTop={3}>
          {data.map((card, key) => cardData(card, key))}
        </Grid>

        <br />
        <br />

        <Stack spacing={3} justifyContent="center" alignItems="center">
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
