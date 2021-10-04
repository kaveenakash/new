import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import HomeIcon from '@material-ui/icons/Home';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { useHistory } from "react-router-dom";

const CategoryBlock = (props) => {
  const classes = useStyles();
  const history = useHistory()
  return (
    <React.Fragment>
      <Paper variant="outlined" elevation={1} className={classes.root}>
        <Grid container direction="column" alignItems="center">
          <Grid item className={classes.headerContainer}>
            <Typography variant="h5" className={classes.headerTitle}>
              All categories
            </Typography>
          </Grid>
          <Grid item className={classes.categoryContainer}>
            <Grid item container justifyContent="center" spacing={10}>
              <Grid item>
                <Grid item container justifyContent="center" alignItems="center" spacing={2}>
                  <Grid item>
                    <Avatar variant="circular" className={classes.iconContainer} >
                      <BusinessCenterIcon fontSize="large" className={classes.icon} />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Grid item container direction="column" spacing={1} justifyContent="flex-start">
                      <Grid item><Typography variant="subtitle1" className={classes.subCategoryTitle} onClick={() => history.push('/services')}>Services</Typography></Grid>
                      <Grid item>Listings <b>8206</b></Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container justifyContent="center" alignItems="center" spacing={2}>
                  <Grid item>
                    <Avatar variant="circular" className={classes.iconContainer} >
                      <HomeIcon fontSize="large" className={classes.icon} onClick={() => history.push('/property')}/>
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Grid item container direction="column" spacing={1} justifyContent="flex-start">
                      <Grid item><Typography variant="subtitle1" className={classes.subCategoryTitle} onClick={() => history.push('/property')}>Property</Typography></Grid>
                      <Grid item>Listings <b>3221</b></Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container justifyContent="center" alignItems="center" spacing={2}>
                  <Grid item>
                    <Avatar variant="circular" className={classes.iconContainer} >
                      <PhoneAndroidIcon fontSize="large" className={classes.icon} onClick={() => history.push('/electronic')}/>
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Grid item container direction="column" spacing={1} justifyContent="flex-start">
                      <Grid item><Typography variant="subtitle1" className={classes.subCategoryTitle} onClick={() => history.push('/electronic')} >Electronics</Typography></Grid>
                      <Grid item>Listings <b>7245</b></Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container justifyContent="center" alignItems="center" spacing={2}>
                  <Grid item>
                    <Avatar variant="circular" className={classes.iconContainer} >
                      <DriveEtaIcon fontSize="large" className={classes.icon} onClick={() => history.push('/vehicle')}/>
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Grid item container direction="column" spacing={1} justifyContent="flex-start">
                      <Grid item><Typography variant="subtitle1" className={classes.subCategoryTitle} onClick={() => history.push('/vehicle')}>Vehicles</Typography></Grid>
                      <Grid item>Listings <b>2478</b></Grid>
                    </Grid>
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
    marginTop: "3rem",
  },
  headerTitle: {
    fontWeight: 500,
  },
  categoryContainer: {
    marginTop: "2.5rem",
  },
  iconContainer:{
      padding:'16px',
      backgroundColor:theme.palette.common.seaWhite
  },
  icon:{
      color:theme.palette.common.pureBlack,
      '&:hover':{
          color:theme.palette.secondary.main,
          cursor:'pointer'
      }
  },
  subCategoryTitle:{
      fontWeight:700,
      '&:hover':{
        cursor:'pointer'
      }
  }

}));

export default CategoryBlock;
