import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


const CarouselItem = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Grid container direction="row" justifyContent="center">
        <Grid item>
          <img src={props.item} />
        </Grid>
      </Grid>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 800,
    minHeight: 440,
    maxWidth: 800,
    backgroundColor: "#FEF4C5",
  }
}));

export default CarouselItem;
