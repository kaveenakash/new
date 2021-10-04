import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import EventNoteIcon from "@material-ui/icons/EventNote";
import Grid from "@material-ui/core/Grid";
import PersonIcon from "@material-ui/icons/Person";
import { BorderAllOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const CustomCard = (props) => {
  const classes = useStyles();
  const history = useHistory()
  const {id,imageURL,amount,date,category,owner,name,path} = props
  const handleClickItem = (id) => {
    history.push(`/${path}/${id}`)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt="image"
          height="140"
          image={imageURL?imageURL[0]:''}
          title="item image"
        />
        <div className={classes.categoryOverlay}>{category}</div>
        <div className={classes.priceOverlay}>{amount} Rs</div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {name}
          </Typography>
          <Grid container direction="column" className={classes.content}>
            <Grid item>
              <Grid
                item
                container
                justifyContent="space-between"
                alignItems="baseline"
                direction="column"
              >
                <Grid item>
                  <Grid item container spacing={1}>
                    <Grid item>
                      <EventNoteIcon className={classes.dateIcon} />
                    </Grid>
                    <Grid item>
                      <Typography
                        align="left"
                        variant="subtitle1"
                        className={classes.dateText}
                      >
                        {date}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid item container spacing={1}>
                    <Grid item>
                      <PersonIcon className={classes.sellerIcon} />
                    </Grid>
                    <Grid item>
                      <Typography
                        align="left"
                        variant="subtitle1"
                        className={classes.sellerText}
                      >
                        {owner}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          className={classes.viewMoreBtn}
          onClick={() => handleClickItem(id)}
        >
          View More
        </Button>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    "&:hover": {
      transform: "scale3d(1.02, 1.03, 1)",
      boxShadow: "blue",
    },
  },
  media: {
    height: 250,
  },
  priceOverlay: {
    position: "absolute",
    top: "12.7rem",
    left: "20px",
    color: "black",
    backgroundColor: "white",
    padding: "0.8rem",
    fontSize: "1.5em",
    fontFamily: "Poppins",
    fontWeight: 900,
    borderRadius: 5,
  },
  categoryOverlay: {
    position: "absolute",
    top: "7.7rem",
    left: "20px",
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    padding: "0.4rem",
    fontFamily: "Poppins",
    fontWeight: 900,
  },
  viewMoreBtn: {
    fontWeight: 600,
  },
  cardAction: {
    justifyContent: "center",
  },
  dateIcon: {
    color: theme.palette.common.seaGray,
  },
  content: {
    marginTop: "1rem",
  },
  dateText: {
    color: theme.palette.common.seaGray,
  },
  sellerIcon: {
    color: theme.palette.common.seaGray,
  },
  sellerText: {
    color: theme.palette.common.seaGray,
  },
}));

export default CustomCard;
