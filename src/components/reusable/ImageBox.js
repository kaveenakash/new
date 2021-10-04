import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Alert from "@material-ui/lab/Alert";
import ErrorIcon from "@material-ui/icons/Error";
import { makeStyles } from "@material-ui/styles";

const ImageBox = (props) => {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const maxNumber = 4;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleImageSubmit = (event) =>{
    event.preventDefault()
    props.setImageData(images)
    props.setFormID(4)
  }

  return (
    <React.Fragment>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <Card className={classes.card}>
            <CardContent>
              <Grid container direction="column">
                <Grid item>
                  <Grid item container spacing={1} justifyContent="flex-start">
                    {imageList.map((image, index) => (
                      <Grid item key={index}>
                        <Grid
                          item
                          container
                          direction="column"
                          alignItems="center"
                        >
                          <Grid item>
                            <img src={image.data_url} alt="" width="290em" />
                          </Grid>
                          <Grid item>
                            <HighlightOffIcon
                              className={classes.deleteIcon}
                              onClick={() => onImageRemove(index)}
                              fontSize="medium"
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
              &nbsp;
              {/* <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="250" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))} */}
            </CardContent>
            {!imageList.length && (
              <>
                <div className={classes.spacer} />
              </>
            )}
            <CardActions>
              <Grid container justifyContent="flex-end" spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={onImageRemoveAll}
                    {...dragProps}
                  >
                    Remove All
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Upload Images
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        )}
      </ImageUploading>
      <Grid
        container
        direction="column"
        spacing={2}
        className={classes.alertContainer}
      >
        <Grid item>
          <Alert
            className={classes.alert}
            icon={<ErrorIcon />}
            severity="warning"
          >
            {" "}
            Images must be JPG or PNG format (Max 5 MB). Do not upload images
            with watermarks.
          </Alert>
        </Grid>
        <Grid item>
          <Alert
            className={classes.alert}
            icon={<ErrorIcon />}
            severity="warning"
          >
            {" "}
            Upload up to a Maximum of 4 Photos.
          </Alert>
        </Grid>
        <Grid item>
          <center>
            <Button
              className={classes.nextButton}
              type="submit"
              variant="outlined"
              align="right"
              color="secondary"
              onClick={(event) => handleImageSubmit(event)}
            >
              Next
            </Button>
          </center>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  card: {
    minwidth: "25rem",
    minHeight: "20rem",
    borderStyle: "dotted",
    borderColor: theme.palette.common.seaGray,
    borderWidth: "0.1rem",
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  deleteIcon: {
    color: theme.palette.error.light,
    "&:hover": {
      color: theme.palette.error.dark,
    },
  },
  spacer: {
    marginTop: "12.2rem",
  },
  nextButton: {
    marginTop: "2rem",
    borderRadius: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.seaWhite,
    },
  },
  alert: {
    borderRadius: 7,
  },
  alertContainer: {
    marginTop: "1.5rem",
  },
}));

export default ImageBox;
