import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { makeStyles } from "@material-ui/core/styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <Divider className={classes.divider} />
        <Grid
          item
          container
          direction="row"
          justifyContent="space-around"
          className={classes.footerContainer}
        >
          <Grid item>
            <Grid item container direction="column" spacing={2}>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  className={classes.overViewHeader}
                >
                  OVERVIEW
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" className={classes.subTitle}>About Us</Typography>
                <Typography variant="subtitle2" style={{ marginTop: "0.5rem" }} className={classes.subTitle}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2" style={{ marginTop: "0.5rem" }} className={classes.subTitle}>
                  Terms of Use
                </Typography>
                <Typography variant="subtitle2" style={{ marginTop: "0.5rem" }} className={classes.subTitle}>
                  Privacy Policy
                </Typography>
                <Typography variant="subtitle2" style={{ marginTop: "0.5rem" }} className={classes.subTitle}>
                  FAQs
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="subtitle1" className={classes.overViewHeader} >CATEGORIES</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" className={classes.subTitle}>Vehicles</Typography>
                <Typography variant="subtitle2" style={{ marginTop: "0.5rem" }} className={classes.subTitle}>
                  Property
                </Typography>
                <Typography variant="subtitle2" style={{ marginTop: "0.5rem" }} className={classes.subTitle}>
                  Services
                </Typography>
                <Typography variant="subtitle2" style={{ marginTop: "0.5rem" }} className={classes.subTitle}>
                  Electronics
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              item
              container
              direction="column"
              spacing={2}
              alignItems="center"
            >
              <Grid item>
                <Typography variant="subtitle1" className={classes.overViewHeader}>FOLLOW US ON</Typography>
              </Grid>
              <Grid item>
                <Grid item container spacing={1}>
                  <Grid item>
                    <Button variant="outlined" className={classes.facebookIcon}>
                      <FacebookIcon />
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" className={classes.twitterIcon}>
                      <TwitterIcon />
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" className={classes.youtubeIcon}>
                      <YouTubeIcon />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="subtitle1" className={classes.overViewHeader}>EXPERIENCE OUR APP</Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.endDivider} />
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
    height: "0.15rem",
  },
  footerContainer: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  overViewHeader: {
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: 400,
    color:theme.palette.secondary.main
  },
  subTitle:{
    fontFamily: 'Roboto',
    fontSize:'16px',
    fontWeight:400,
    "&:hover": {
        transform: "scale3d(1.05, 1.03, 1)",
        boxShadow: "blue",
        color:theme.palette.secondary.main
      },
  },
  endDivider: {
    height: "0.15rem",
    backgroundColor: theme.palette.secondary.main,
  },
  facebookIcon: {
    "&:hover": {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
  },
  twitterIcon: {
    "&:hover": {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
  },
  youtubeIcon: {
    "&:hover": {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
  },
}));

export default Footer;
