import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import SignOutBtn from '../profile/SIgnOutBtn'
import { useSelector } from "react-redux";

import MenuButton from "../reusable/MenuButton";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {
  const [postAddModalStatus, setPostAddModalStatus] = useState(false);
  const [menuButtonId, setMenuButtonId] = useState(0);

  const isLogged = useSelector((state) => state.login.loginState);

  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePostAddModal = () => {
    setPostAddModalStatus(true);
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar color="secondary">
          <Toolbar disableGutters {...props}>
            <Container fixed>
              <Grid
                container
                justifyContent="space-between"
                direction="row"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    variant="h3"
                    className={classes.headerTitle}
                    onClick={() => {
                      history.replace("/");
                      setMenuButtonId(0);
                    }}
                  >
                    seller.lk
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    item
                    container
                    spacing={1}
                    justifyContent="flex-end"
                    direction="row"
                    alignItems="center"
                  >
                    <Grid item>
                      <Hidden smDown>
                        <MenuButton menuButtonId={menuButtonId} />
                      </Hidden>
                    </Grid>
                    {!isLogged && (
                      <Grid item>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            history.replace("/register");
                            setMenuButtonId(0);
                          }}
                          className={classes.registerBtn}
                        >
                          Register
                        </Button>
                      </Grid>
                    )}
                    <Grid item>
                      {!isLogged ? (
                        <Button
                          variant="outlined"
                          onClick={() => {
                            history.replace("/login");
                            setMenuButtonId(0);
                          }}
                        >
                          Login
                        </Button>
                      ) : (
                        <SignOutBtn/>
                        // <Button
                        //   variant="outlined"
                        //   onClick={() => {
                        //     props.logOut();
                        //     history.replace("/login");
                        //     setMenuButtonId(0);
                        //   }}
                        // >
                        //   Logout
                        // </Button>
                      )}
                    </Grid>
                    <Grid item>
                      {props.loginData && (
                        <Avatar
                          alt="Remy Sharp"
                          src={props.loginData.profileObj.imageUrl}
                          onClick={() => history.push("/user-profile")}
                        />
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  registerBtn: {
    [theme.breakpoints.down("md")]: {
      size: "small",
    },
    postAdBtn: {
      [theme.breakpoints.down("md")]: {
        size: "small",
      },
    },
  },
  headerTitle: {
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    fontFamily: "Georama",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default Header;
