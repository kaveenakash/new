import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import DescriptionIcon from "@material-ui/icons/Description";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ImageIcon from "@material-ui/icons/Image";
import CheckIcon from "@material-ui/icons/Check";
import Alert from "@material-ui/lab/Alert";
import ErrorIcon from "@material-ui/icons/Error";
import classNames from "classnames/bind";

export default function IconList(props) {
  const classes = useStyles();
  const { formID } = props;
  let cx = classNames.bind(classes);


  //first icon
  const basciButtonClass = cx({
    iconbuttonSelected: formID === 0,
    iconButtonChecked: formID > 0,
  });
  const basicIcon = cx({
    iconSelected: formID === 0,
    iconChecked: formID > 0,
  });
  //second icon
  const primaryButtonClass = cx({
    iconbuttonSelected: formID === 1,
    iconbuttonNotSelected: formID < 1,
    iconButtonChecked: formID > 1,
  });
  const primaryIcon = cx({
    iconSelected: formID === 1,
    iconNotSelected: formID < 1,
    iconChecked: formID > 1,
  });
  //third icon
  const descriptionButtonClass = cx({
    iconbuttonSelected: formID === 2,
    iconbuttonNotSelected: formID < 2,
    iconButtonChecked: formID > 2,
  });
  const descriptionIcon = cx({
    iconSelected: formID === 2,
    iconNotSelected: formID < 2,
    iconChecked: formID > 2,
  });
  //fourth navigation icon
  const imageButtonClass = cx({
    iconbuttonSelected: formID === 3,
    iconbuttonNotSelected: formID < 3,
    iconButtonChecked: formID > 3,
  });
  const imageIcon = cx({
    iconSelected: formID === 3,
    iconNotSelected: formID < 3,
    iconChecked: formID > 3,
  });
  //fifth navigation icon
  const previewButtonClass = cx({
    iconbuttonNotSelected: formID < 4,
    iconButtonChecked: formID === 4,
  });
  const previewIcon = cx({
    iconNotSelected: formID < 4,
    iconChecked: formID === 4,
  });

  return (
    <React.Fragment>
      <Grid container direction="column" spacing={4}>
        <Grid item>
       {formID !== 4 &&( <Alert
            justifyContent="center"
            // className={classes.alert}
            icon={<ErrorIcon />}
            severity="warning"
          >
           
            Dear User, If you experience any technical difficulties please contact Seller.lk Team for a assistance
          </Alert>)}
       {formID === 4 &&( <Alert
            justifyContent="center"
            // className={classes.alert}
          
            severity="success"
          >
           
            Your filled All data successfully !!
          </Alert>)}
      
        </Grid>
        <Grid item>
          <Grid container justifyContent="space-around">
            <Grid item>
              <Grid item container direction="column" alignItems="center">
                <Grid item>
                  <Button
                    variant="outlined"
                    className={basciButtonClass}
                    size="large"
                    disableRipple
                  >
                    {" "}
                    <PersonIcon fontSize="large" className={basicIcon} />
                  </Button>
                </Grid>
                <Grid item>
                  {props.formID === 0 && (
                    <ArrowDropUpIcon
                      fontSize="large"
                      className={classes.arrowIcon}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container direction="column" alignItems="center">
                <Grid item>
                  <Button
                    variant="outlined"
                    className={primaryButtonClass}
                    size="large"
                    disableRipple
                  >
                    {" "}
                    <DescriptionIcon fontSize="large" className={primaryIcon} />
                  </Button>
                </Grid>
                <Grid item>
                  {props.formID === 1 && (
                    <ArrowDropUpIcon
                      fontSize="large"
                      className={classes.arrowIcon}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container direction="column" alignItems="center">
                <Grid item>
                  <Button
                    variant="outlined"
                    className={descriptionButtonClass}
                    size="large"
                    disableRipple
                  >
                    {" "}
                    <InsertDriveFileIcon
                      fontSize="large"
                      className={descriptionIcon}
                    />
                  </Button>
                </Grid>
                <Grid item>
                  {props.formID === 2 && (
                    <ArrowDropUpIcon
                      fontSize="large"
                      className={classes.arrowIcon}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container direction="column" alignItems="center">
                <Grid item>
                  <Button
                    variant="outlined"
                    className={imageButtonClass}
                    size="large"
                    disableRipple
                  >
                    {" "}
                    <ImageIcon fontSize="large" className={imageIcon} />
                  </Button>
                </Grid>
                <Grid item>
                  {props.formID === 3 && (
                    <ArrowDropUpIcon
                      fontSize="large"
                      className={classes.arrowIcon}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container direction="column" alignItems="center">
                <Grid item>
                  <Button
                    variant="outlined"
                    className={previewButtonClass}
                    size="large"
                    disableRipple
                  >
                    {" "}
                    <CheckIcon fontSize="large" className={previewIcon} />
                  </Button>
                </Grid>
                <Grid item>
                  {props.formID === 4 && (
                    <ArrowDropUpIcon
                      fontSize="large"
                      className={classes.arrowGreenIcon}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  iconSelected: {
    fontSize: "55px",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
    },
  },
  iconbuttonSelected: {
    borderRadius: 50,
    padding: "12px",
    borderColor: theme.palette.secondary.main,
  },
  iconNotSelected: {
    fontSize: "55px",
    color: theme.palette.common.seaGray,
    "&:hover": {
      color: theme.palette.common.seaGray,
      cursor: "pointer",
    },
  },
  iconbuttonNotSelected: {
    borderRadius: 50,
    padding: "12px",
    borderColor: theme.palette.common.seaGray,
  },
  iconChecked: {
    fontSize: "55px",
    color: theme.palette.common.seaGreen,
    "&:hover": {
      color: theme.palette.common.seaGreen,
      cursor: "pointer",
    },
  },
  iconButtonChecked: {
    borderRadius: 50,
    padding: "12px",
    borderColor: theme.palette.common.seaGreen,
  },
  arrowIcon: {
    fontSize: "50px",
    color: theme.palette.secondary.main,
  },
  arrowGreenIcon: {
    fontSize: "50px",
    color: theme.palette.common.seaGreen,
  },
}));
