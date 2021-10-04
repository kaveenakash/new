import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
function SuccessfulModel(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <center><div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Error!!
          </Typography>
          <Typography variant="h5" component="h2">
            {/* be{bull}nev{bull}o{bull}lent */}Username and password doesn't match
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            ReEnter
          </Typography>
          {/* <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button size="small">Back</Button>
          <Button size="small">Next</Button>
        </CardActions>
      </Card>
    </div>
    </center>
    );
}

export default SuccessfulModel;
