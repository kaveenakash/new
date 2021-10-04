import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CategoryBox from "../reusable/CategoryBox";
import Container from "@material-ui/core/Container";

import { propertyCategories, propertyAdds } from "../../store/data";
import { CategoryCheck, FilterPropertyListings } from "../../utility/common";
import CustomCard from "../reusable/CustomCard";
import axios from "axios";
export default function PropertyPage() {
  const classes = useStyles();
  const [categories, setCategories] = useState(propertyCategories);
  const [propertyListings, setPropertyListings] = useState(propertyAdds);
  const [allListings, setAllListings] = useState([]);
  const [tempData, setTempData] = useState([]);

  const handleCheckdCategories = async (id) => {
    let newCategories = CategoryCheck(categories, id);
    setCategories(newCategories);
    const filteredVehicleData = await handleVehicleFilter(newCategories);
  };

  const handleVehicleFilter = (categories) => {
    const filterData = FilterPropertyListings(categories, tempData);
    setAllListings(filterData);
  };

  useEffect(() => {
    const getPropertyData = async () => {
      const result = await axios.get(
        "https://spmsliit.herokuapp.com/api/property/get-all-property"
      );
      setAllListings(result.data);
      setTempData(result.data);
      console.log(result.data);
    };
    getPropertyData();
  }, []);

  return (
    <React.Fragment>
      <Container fixed className={classes.container}>
        <Grid container direction="column">
          <Grid item className={classes.headerContainer}>
            <Typography variant="h4" align="center" className={classes.header}>
              All Property Listings
            </Typography>
          </Grid>
          <Grid item className={classes.bodyContainer}>
            <Grid
              item
              container
              direction="row"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12} md={4} lg={3}>
                <CategoryBox
                  categories={categories}
                  handleCheckdCategories={handleCheckdCategories}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={9}>
                <Grid
                  item
                  container
                  spacing={2}
                  className={classes.cardContainer}
                  justifyContent="center"
                >
                  {allListings.map((item) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={3}
                        xl={3}
                        key={item.id + item.name}
                      >
                        <CustomCard
                           id={item._id}
                           imageURL={item.images}
                           name={item.title}
                           amount={item.price}
                           date={item.createdAt}
                           category={item.propertyCategory}
                           owner={item.name}
                          path={"property"}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  header: {
    color: theme.palette.common.seaGray,
    fontSize: "36px",
    fontFamily: "Noto sans",
  },
  headerContainer: {
    marginTop: "1rem",
  },
  bodyContainer: {
    marginTop: "3rem",
  },
}));
