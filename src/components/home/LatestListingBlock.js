import React from "react";
import CustomCard from "../reusable/CustomCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {vehicleAdds } from "../../store/data";

const LatestListingBlock = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.root}
      >
        <Grid item className={classes.headerTitle}>
          <Typography variant="h5">Latest Listings</Typography>
        </Grid>
        <Grid item className={classes.cardContainer}>
          <Grid
            item
            container
            spacing={2}
            className={classes.cardContainer}
            justifyContent="center"
          >
            {vehicleAdds.map((item) => {
                    return (
                      <Grid item key={item.id+item.name} >
                        <CustomCard id={item.id} imageURL={item.image} name={item.name} amount={item.amount} date={item.date} category={item.category} owner={item.user} />
                      </Grid>
                    );
                  })}
          </Grid>
          <Grid item className={classes.moreButtonContainer}>
            <Grid item container justifyContent="center">
              <Grid item>
                <Button variant="outlined" className={classes.moreBtn}>See More</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
  },
  headerTitle: {
    marginBottom: "3rem",
  },
  moreButtonContainer:{
      marginTop:'2rem'
  },
  moreBtn:{
      padding:'1rem',
      borderRadius:25,
      color:theme.palette.secondary.main,
      borderColor:theme.palette.secondary.main,
      textTransform:'none',
      '&:hover':{
        backgroundColor:theme.palette.secondary.main,
        color:theme.palette.common.seaWhite
      }
  }
}));

export default LatestListingBlock;
