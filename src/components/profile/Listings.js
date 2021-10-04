import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteDialog from "./DeleteDialog";
import ViewDialog from "./ViewDialog";
import axios from "../axios/axios";
import { useSelector } from "react-redux";

export default function Listings(props) {
  const classes = useStyles();
  const [openDelete, setOpenDelete] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [userListings, setUserListings] = useState([]);
  const [viewListings, setViewListings] = useState([]);
  const [deleteItemId, setDeleteItemId] = useState("");
  const [deleteItemType, setDeleteItemType] = useState("");
  let id = false;
  const userId = localStorage.getItem("userId");
  const handleDelete = (id, type) => {
    setOpenDelete(!openDelete);
    setDeleteItemId(id);
    let temp = userListings
    temp = userListings.filter(item => console.log(item._id !== id))
    setUserListings(temp)
    setDeleteItemType(type);
    handleDeleteApi()
  };
  const handleView = (id) => {
    setOpenView(!openView);
    const result = userListings.filter((item) => item._id === id);
    setViewListings(result);
  };

  const handleDeleteApi = async () => {
    setOpenDelete(!openDelete);
    const data = {
      userId,
      itemId: deleteItemId,
    };
    if (deleteItemType === "property") {
      const result = await axios.post(
        "https://spmsliit.herokuapp.com/api/auth/remove-property-listings",
        data
      );
      
    } else {
      const result = await axios.post(
        "http://localhost:9090/api/auth/remove-vehicle-listings",
        data
      );
     
    }
    
  };

  useEffect(() => {
    getUserListings();
  }, [refresh]);

  const getUserListings = async () => {
    const data = { userId: userId };
    const result = await axios.post("auth/get-user-listings", data);
    if (result.data.propertyListings) {
      props.handleTotalListings(
        result.data.propertyListings.length + result.data.vehicleListings.length
      );
    }
    console.log('hello')
    // setUserListings([...result.data.propertyListings]);
    setUserListings([
      ...result.data.propertyListings,
      ...result.data.vehicleListings,
    ]);
    
  };

  const imageUrl =
    "http://patpat-s3-live.s3.amazonaws.com/uploads/30ab9e94924fbbd7efa6682bbce08a29-710100.jpeg";
  return (
    <Container>
      <Grid container alignItems="center" direction="column">
        {userListings.map((item) => {
          if (item.listingType == "property") {
            return (
              <Grid item>
                <Card className={classes.root}>
                  <CardContent>
                    <Grid container item justifyContent="space-between">
                      <Grid item>
                        <Grid item container spacing={4}>
                          <Grid item>
                            <img
                              alt="Remy Sharp"
                              width="150rem"
                              src={item.images && item.images[0]}
                              className={classes.large}
                            />
                          </Grid>
                          <Grid item>
                            <Grid item container direction="column">
                              <Grid item>
                                <Typography variant="subtitle1">
                                  {" "}
                                  <li>Title - {item.title}</li>
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle1">
                                  <li>
                                    Price - Rs.
                                    {item.price.toLocaleString("en-US")}
                                  </li>
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle1">
                                  <li>Type - {item.propertyType}</li>
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle1">
                                  <li>Location - {item.area}</li>
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid
                          item
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <br />
                          <br />

                          <Grid item>
                            <Grid item container spacing={2}>
                              {/* <Grid item>
                                  <EditIcon fontSize="medium" className={classes.editBtn}/>
                                </Grid> */}
                              <Grid item>
                                <DeleteIcon
                                  fontSize="medium"
                                  className={classes.deleteBtn}
                                  onClick={() =>
                                    handleDelete(item._id, item.listingType)
                                  }
                                />
                              </Grid>
                              <Grid item>
                                <VisibilityIcon
                                  fontSize="medium"
                                  className={classes.viewBtn}
                                  onClick={() => handleView(item._id)}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          } else {
            return (
              <Grid item>
                <Card className={classes.root}>
                  <CardContent>
                    <Grid container item justifyContent="space-between">
                      <Grid item>
                        <Grid item container spacing={4}>
                          <Grid item>
                            <img
                              alt="Remy Sharp"
                              width="150rem"
                              src={item.images && item.images[0]}
                              className={classes.large}
                            />
                          </Grid>
                          <Grid item>
                            <Grid item container direction="column">
                              <Grid item>
                                <Typography variant="subtitle1">
                                  {" "}
                                  <li>Title - {item.title}</li>
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle1">
                                  <li>Price - Rs.{item.totalPrice}</li>
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle1">
                                  <li>Type - {item.listingType}</li>
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle1">
                                  <li>Location - {item.area}</li>
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid
                          item
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <br />
                          <br />

                          <Grid item>
                            <Grid item container spacing={2}>
                              {/* <Grid item>
                                  <EditIcon fontSize="medium" className={classes.editBtn}/>
                                </Grid> */}
                              <Grid item>
                                <DeleteIcon
                                  fontSize="medium"
                                  className={classes.deleteBtn}
                                  onClick={() => handleDelete(item._id, item.listingType)}
                                />
                              </Grid>
                              <Grid item>
                                <VisibilityIcon
                                  fontSize="medium"
                                  className={classes.viewBtn}
                                  onClick={() => handleView(item._id)}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          }
        })}
      </Grid>
      {openDelete && (
        <DeleteDialog
          open={openDelete}
          handleDelete={handleDelete}
          handleDeleteApi={handleDeleteApi}
        />
      )}
      {openView && (
        <ViewDialog
          open={openView}
          title={"Listing Details"}
          handleView={handleView}
          viewListings={viewListings}
        />
      )}
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
    minWidth: 850,
    backgroundColor: "#FFFDE7",
  },
  editBtn: {
    "&:hover": {
      color: theme.palette.success.main,
    },
  },
  deleteBtn: {
    "&:hover": {
      color: theme.palette.error.main,
    },
  },
  viewBtn: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));
