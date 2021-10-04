import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const WarningCard = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.childCard} variant="outlined">
        <CardContent>
          <Typography variant="subtitle2">{props.content}</Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  childCard: {
    minWidth: 400,
  },
}));

export default WarningCard;
