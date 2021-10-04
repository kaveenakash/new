import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";

import CarouselItem from "./CarouselItem";
import { items } from "../../../constants/Constancts";

const CarouselCard = (props) => {
  const classes = useStyles();

  return (
    <Carousel
      indicators={false}
      autoPlay={false}
      fullHeightHover={false}
      className={classes.root}
      animation="slide"
      navButtonsAlwaysVisible={true}
      cycleNavigation={false}
      style={{ margin: 0 }}
    >
      { props.imageData.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 800,
    minHeight: 440,
    maxHeight:600,
    maxWidth: 800,
    backgroundColor: "#FEF4C5",
  },
  title: {
    fontSize: 14,
  },
}));

export default CarouselCard;
