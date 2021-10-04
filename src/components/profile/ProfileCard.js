import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import InvertColorsRoundedIcon from "@material-ui/icons/InvertColorsRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/loginSlice";

const ProfileCard = (props) => {
  const classes = useStyles();
  const history = useHistory()
  const dispatch = useDispatch();

  const handleSignOut = async() =>{
    await dispatch((logout()))
    history.push('/')
  }

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.cardContainer}
      >
        <Grid item>
          <Avatar
            alt="Remy Sharp"
            src={props.imageUrl}
            className={classes.large}
          />
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" className={classes.userName}>
            {props.userName}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" className={classes.email}>
            {props.email}
          </Typography>
        </Grid>
      </Grid>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        disablePadding={true}
      >
        <ListItem button className={classes.listItem} onClick={() => history.push('/user-profile')}>
          <ListItemIcon>
            <PersonOutlineRoundedIcon className={classes.listItemIcon} />
          </ListItemIcon>
          <ListItemText disableTypography={true}>
            <Typography variant="subtitle1" className={classes.listItemText}>
              Your Profile
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem button className={classes.listItem} >
          <ListItemIcon>
            <InvertColorsRoundedIcon className={classes.listItemIcon} />
          </ListItemIcon>
          <ListItemText disableTypography={true}>
            <Typography variant="subtitle1" className={classes.listItemText}>
              Change Theme
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem button className={classes.listItem} onClick={() => handleSignOut()}>
          <ListItemIcon>
            <ExitToAppRoundedIcon className={classes.listItemIcon} />
          </ListItemIcon>
          <ListItemText disableTypography={true} >
            <Typography variant="subtitle1" className={classes.listItemText} >
              Logout
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: "8px 0px 8px 0",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  userName: {
    color: theme.palette.common.darkWhite,
  },
  email: {
    color: theme.palette.common.darkWhite,
  },
  listItem: {
    paddingTop: "2px",
    "&:hover": {
      backgroundColor: "#01579b",
    },
  },
  listItemText: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22px",
    color: theme.palette.common.seaWhite,
  },
  listItemIcon: {
    color: theme.palette.common.seaWhite,
  },
  userName:{
    color:theme.palette.common.seaWhite
  },
  email:{
    color:theme.palette.common.seaWhite
  }
}));

export default ProfileCard;