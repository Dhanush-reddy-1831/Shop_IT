import React, { useEffect } from "react";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import Rating from "@mui/material/Rating";
import Modal from "@mui/material/Modal";

import { useCart } from "react-use-cart";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: "Asss/2.jpeg",
  },
  {
    imgPath: "Asss/3.jpg",
  },
  {
    imgPath: "Asss/4.jpg",
  },
  {
    imgPath: "Asss/7jpg.jpg",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "340px",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: -4,
};
function Product({ userData }) {
  const [Data, setData] = React.useState([]);
  let [Description, setDescription] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) => {
    setDescription(Data.filter((item) => item.id === id));
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const { addItem } = useCart();

  // const [productId, setproductId] = React.useState([]);

  let api = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res);
      let alldata = res.data;
      setData(alldata);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    api();
  }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid>
      <Grid item xs={12} sm={12} md={12} sx={{ width: "100%", flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 20,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    marginLeft: "100px",
                    height: 500,
                    display: "block",
                    width: "90%",
                    overflow: "hidden",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </Grid>
      <Typography
        variant="h3"
        sx={{ fontStyle: "italic", padding: "20px", color: "#ad1457" }}
      >
        TOP PRODUCTS ON SALE
      </Typography>
      <Container maxWidth="1">
        {/* sx={{ border: "1px solid black" }} */}
        <Grid container spacing={3}>
          {Data.filter((val) => {
            if (userData === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(userData.toLowerCase())
            ) {
              return val;
            }
          }).map((val, ind) => {
            return (
              <Grid item md={3}>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: "100%",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "transform 0.5s ease-in-out",
                    },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="340"
                      width="140"
                      image={val.image}
                      alt="green iguana"
                      sx={{
                        objectFit: "contain",
                        padding: "10px",
                        animation: "example 4s ease",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: "transform 0.75s linear",
                          transitionDelay: "2s",
                        },
                        "@keyframes example": {
                          from: { opacity: 0 },
                          to: { opacity: 1 },
                        },
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {val.title}
                      </Typography>
                      <Rating
                        name="read-only"
                        defaultValue={Math.round(val.rating.rate)}
                        readOnly
                      />
                      <Typography variant="h5">$ {val.price}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "black",
                        width: "40%",
                        height: "50px",
                        color: "white",
                      }}
                      variant="contained"
                      onClick={() => handleOpen(val.id)}
                    >
                      Description
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: "black",
                        width: "40%",
                        height: "50px",
                        color: "white",
                      }}
                      variant="contained"
                      onClick={() => {
                        addItem(val);
                      }}
                    >
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {Description.map((val) => (
            <Card sx={{ maxWidth: 345, height: "50%" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  width="140"
                  image={val.image}
                  alt="green iguana"
                  sx={{ objectFit: "contain", padding: "10px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {val.title}
                  </Typography>
                  <Typography>{val.description}</Typography>
                  <Rating
                    name="read-only"
                    defaultValue={Math.round(val.rating.rate)}
                    readOnly
                  />
                  <Typography variant="h4">$ {val.price}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "black",
                    width: "40%",
                    height: "50px",
                    color: "white",
                  }}
                  variant="contained"
                  onClick={() => {
                    addItem(val);
                  }}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Modal>
    </Grid>
  );
}

export default Product;
