import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import ErrorIcon from "@material-ui/icons/Error";

import WarningCard from "./WarningCard";
import { errorMessage } from "../../../constants/Constancts";
const Warning = () => {
  const [isExpand, setIsExpand] = useState(false);
  const classes = useStyles();

  const expandHandler = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.root} variant="outlined">
        <Accordion expanded={isExpand}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Grid item container direction="row" justify="space-between">
                  <Grid item>
                    <Grid item container spacing={1} alignItems="center">
                      <Grid item>
                        <ErrorIcon className={classes.errorIcon} />
                      </Grid>
                      <Grid item>
                        <Typography className={classes.heading}>
                          SECURITY TIPS
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ExpandMoreIcon
                      onClick={expandHandler}
                      className={[
                        isExpand
                          ? classes.dropdownOpen
                          : classes.dropdownClosed,
                      ]}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <WarningCard content={errorMessage.english} />
              </Grid>
            </Grid>
          </AccordionSummary>

          <AccordionDetails>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <WarningCard content={errorMessage.sinhala} />
              </Grid>
              <Grid item>
                <WarningCard content={errorMessage.tamil} />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Card>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 800,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.error.main,
  },
  childCard: {
    minWidth: 400,
  },
  dropdownOpen: {
    transform: "rotate(-180deg)",
  },
  dropdownClosed: {
    transform: "rotate(0)",
  },
  errorIcon: {
    color: theme.palette.error.main,
  },
}));

export default Warning;
