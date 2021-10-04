import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/styles";

import { categories, regions } from "../../store/data";

const SearchBarBlock = (props) => {
  const classes = useStyles();

  const [category, setCategory] = React.useState();
  const [region, setRegion] = React.useState();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.searchBarSection}
       
      >
        <Grid item >
          <Typography variant="h4" className={classes.headerTitle}>
            Search in 8929 Listings
          </Typography>
         <center><Divider className={classes.headerDivider} variant="middle"  /></center> 
        </Grid>
        <Grid item className={classes.searchTabs}>
          <Grid item container direction="row" spacing={1}>
            <Grid item>
              <TextField
                id="outlined-basic"
                placeholder="ie. Toyota Aqua"
                variant="outlined"
                color="secondary"
                className={classes.searchField}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-select-currency-native"
                select
                fullWidth
                value={category}
                onChange={handleCategoryChange}
                SelectProps={{
                  native: true,
                  defaultValue: "Select a category",
                }}
                variant="outlined"
              >
                {categories.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                id="outlined-select-currency-native"
                select
                fullWidth
                value={region}
                onChange={handleRegionChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {regions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" size="large" className={classes.searchButton}>
              <SearchIcon className={classes.searchIcon}/>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  headerTitle: {
    color: theme.palette.common.seaGray,
    fontSize: "36px",
    fontFamily: "Noto Sans",
  },
  searchBarSection: {
    marginTop: "1.4rem",
  },
  headerDivider: {
    height: "0.14rem",
    width:'4rem',
    backgroundColor:theme.palette.common.darkGray
  },
  searchField: {
    width: "30rem",
  },
  searchButton:{
    height:'3.4rem'
  },
  searchIcon:{
      color:theme.palette.common.seaWhite
  },
  searchTabs:{
    marginTop:'2rem'
  }
}));
export default SearchBarBlock;
