import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CategoryBox from "../reusable/CategoryBox";
import Container from "@material-ui/core/Container";

import { electronicCategories, electronicAdds } from "../../store/data";
import { CategoryCheck,FilterElectronicListings } from "../../utility/common";
import CustomCard from "../reusable/CustomCard";
import Warning from "../reusable/warning/Warning";
import axios from "axios";
export default function ElectronicPage() {
  const classes = useStyles();
  const [categories, setCategories] = useState(electronicCategories);
  const [electronicListings, setElectronicListings] = useState(electronicAdds);
  const [allListings, setAllListings] = useState([]);
  const [tempData, setTempData] = useState([]);


  const handleCheckdCategories = async (id) => {
    let newCategories = CategoryCheck(categories, id);
    setCategories(newCategories);
    const filteredElectronicData = await handleElectronicFilter(newCategories);
  };

  const handleElectronicFilter = (categories) => {
    const filterData = FilterElectronicListings(categories, tempData);
    setAllListings(filterData);
  };
  useEffect(() => {
    const getElectronicData = async () => {
      const result = await axios.get(
        "http://localhost:9090/api/electronic/get-all-electronic"
      );
      setAllListings(result.data)
      setTempData(result.data)
    };
    getElectronicData();
  }, []);

  return (
    <React.Fragment>
      <Container fixed className={classes.container}>
        <Grid container direction="column">
          <Grid item className={classes.headerContainer}>
            <Typography variant="h4" align="center" className={classes.header}>
              All Electronic Listings
            </Typography>
          </Grid>
          <Grid item className={classes.bodyContainer}>
            <Grid
              item
              container
              direction="row"
              justify="flex-start"
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
                  justify="center"
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
                          category={item.electronicCategory}
                          owner={item.name}
                          path={"electronic"}
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
