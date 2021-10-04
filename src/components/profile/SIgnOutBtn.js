import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from '@material-ui/core/styles';
import ProfileCard from "./ProfileCard";
import {useSelector} from 'react-redux'

const SignOutButton = (props) => {
  const classes = useStyles();
  const [IsProfilePopOpen, setIsProfilePopOpen] = useState(false);

  const imageUrl = 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png'
  const userName = localStorage.getItem('fname') + " " + localStorage.getItem('lname')
  const email =  useSelector(state => state.login.email)
  
  const handleClick = (event) => {
    setIsProfilePopOpen(event.currentTarget);
  };

  const handleClose = () => {
    setIsProfilePopOpen(null);
  };
  

  const open = Boolean(IsProfilePopOpen);
  const id = open ? "simple-popover" : undefined;

  return (
    <React.Fragment>
      <Fab
        variant="extended"
        size="small"
        aria-label="add"
        className={classes.fabContainer}
        onClick={handleClick}
  
      >
        <Avatar
          alt="user"
          className={classes.avatar}
          src={imageUrl}
        />
        <Typography varaint="h6" className={classes.userName}>
          {userName}
        </Typography>
        <ArrowDropDownIcon />
      </Fab>
      <Popover
      className={classes.popContainer}
        elevation={16}
        id={id}
        open={open}
        anchorEl={IsProfilePopOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <ProfileCard imageUrl={imageUrl} userName={userName} email={email}/>
      </Popover>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  fabContainer: {
    color: theme.palette.common.seaWhite,
    backgroundColor:theme.palette.primary.main,
    borderStyle: "solid",
    borderColor: theme.palette.primary.dark,
    borderWidth: "0.001rem",

    "&:hover": {
      borderColor: theme.palette.secondary.light,
      color:theme.palette.primary.main
    },
  },
  avatar: {
    marginLeft: 0,
    marginRight: theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  userName: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20.986px",
    color:theme.palette.common.seaDark
  },
  cardContainer:{
      padding:"8px 0px 8px 0"
  }
}));

export default SignOutButton;