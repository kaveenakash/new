import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import HomeIcon from "@material-ui/icons/Home";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import Badge from "@material-ui/core/Badge";
import AddIcon from '@material-ui/icons/Add';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ShareIcon from '@material-ui/icons/Share';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const NotificationBlock = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper variant="outlined" elevation={1} className={classes.root}>
        <Grid container direction="column" alignItems="center">
          <Grid item className={classes.headerContainer}>
            <Typography variant="h5" className={classes.headerTitle}>
              Selling your car with us is fast and easy..
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            direction="row"
          
            className={classes.itemContainer}
          >
            <Grid item container justifyContent="space-evenly">
              <Grid item>
                  <Grid item container direction="column" alignItems="center" spacing={3}>
                      <Grid item>
                      <Avatar variant="circular" className={classes.iconContainer}>
                  <AddIcon
                    fontSize="large"
                    className={classes.icon}
                  />
                </Avatar>
                      </Grid>
                      <Grid item>
                         <Typography  className={classes.title}variant="subtitle1">Create</Typography>
                      </Grid>
                  </Grid>
               
              </Grid>
              <Grid item>
                  <Grid item container direction="column" alignItems="center" spacing={3}>
                      <Grid item>
                      <Avatar variant="circular" className={classes.iconContainer}>
                  <PostAddIcon
                    fontSize="large"
                    className={classes.icon}
                  />
                </Avatar>
                      </Grid>
                      <Grid item>
                         <Typography className={classes.title} variant="subtitle1">Post New Ad.</Typography>
                      </Grid>
                  </Grid>
               
              </Grid>
              <Grid item>
                  <Grid item container direction="column" alignItems="center" spacing={3}>
                      <Grid item>
                      <Avatar variant="circular" className={classes.iconContainer}>
                  <ShareIcon
                    fontSize="large"
                    className={classes.icon}
                  />
                </Avatar>
                      </Grid>
                      <Grid item>
                         <Typography className={classes.title} variant="subtitle1">Share</Typography>
                      </Grid>
                  </Grid>
               
              </Grid>
              <Grid item>
                  <Grid item container direction="column" alignItems="center" spacing={3}>
                      <Grid item>
                      <Avatar variant="circular" className={classes.iconContainer}>
                  <LocalAtmIcon
                    fontSize="large"
                    className={classes.icon}
                  />
                </Avatar>
                      </Grid>
                      <Grid item>
                         <Typography className={classes.title} variant="subtitle1">Enjoy the money!</Typography>
                      </Grid>
                  </Grid>
               
              </Grid>
             
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
    display: "flex",
    height: "30rem",
    backgroundColor: theme.palette.common.lightGray,
    borderTopColor: theme.palette.common.borderColor,
  },
  headerContainer: {
    marginTop: "5rem",
    marginBottom: "4rem",
  },
  headerTitle: {
    fontWeight: 500,
    fontSize:'1.7em',
  },
  categoryContainer: {
    marginTop: "2.5rem",
  },
  iconContainer: {
    padding: "30px",
    backgroundColor: theme.palette.secondary.main,
  },
  icon: {
    color: theme.palette.common.pureBlack,
    
  },
  title:{
    fontFamily: 'Varela Round',
    fontSize:'1.5em',
    fontWeight:540
  }
}));

export default NotificationBlock;
