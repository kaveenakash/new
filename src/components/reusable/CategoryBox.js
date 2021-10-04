import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";

export default function CategoryBox(props) {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <React.Fragment>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid container direction="column">
            <Grid item>
              {props.categories.map((item) => {
                return (
                  <Grid item container alignItems="center" key={item.id+item.name}>
                    <Grid item>
                      <Checkbox
                        checked={item.isChecked}
                        onChange={() => props.handleCheckdCategories(item.id)}
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                    </Grid>
                    <Grid item>{item.name}</Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

const useStyles =  makeStyles((theme) =>({
  root: {
    minWidth: 0,
    minHeight: 350,
    borderColor:theme.palette.secondary.main,
    background:
      "radial-gradient(circle, rgba(251,220,63,0.12368697478991597) 5%, rgba(252,219,70,0.31976540616246496) 97%)",
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
}));
