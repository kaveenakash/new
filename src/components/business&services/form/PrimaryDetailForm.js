import React, { useState } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

import {
  serviceType,
  areas,
  ratings,
} from "../../../store/data";

const PrimaryDetailForm = (props) => {
  const [category, setCategory] = useState(null);
  const [filterdCategory, setFilterdCategory] = useState(serviceType);
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const classes = useStyles();

  const handleCategory = (selectedOption) => {
    setCategory(selectedOption);
    console.log(selectedOption)
    FilterType(selectedOption);
  };

  const FilterType = (selectedOption) => {
    const newCategory = serviceType.filter(
      (item) => item.mainCategory === selectedOption.id
    );
    setFilterdCategory(newCategory);
  };

  const onSubmit = (data) => {
    let newData = [
      {
        serviceType: data.serviceType,
        ratings:data.ratings,
        description:data.description,
        price:data.price,
        title:data.title,
      },
    ];
    props.setPrimaryData(newData);
    props.setFormID(2);
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="title"
          control={control}
          defaultValue=""
          label="title"
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Title *</Typography>
              </InputLabel>{" "}
              <Input fullWidth {...field} />
            </>
          )}
        />
        <br />
        <br />
        <br />
        <Controller
          name="serviceType"
          control={control}
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Business and Service Type *</Typography>
              </InputLabel>
              <Select
                {...field}
                options={serviceType}
                placeholder="Choose Type"
                
              />
            </>
          )}
        />
        
        <br />
        <br />

        <Controller
          name="ratings"
          control={control}
          defaultValue=""
          label="ratings"
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">
                  Ratings *
                </Typography>
              </InputLabel>{" "}
              <Input fullWidth {...field} />
            </>
          )}
        />
        <br />
        <br />
        <br />
        <Controller
          name="price"
          control={control}
          defaultValue=""
          label="price"
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Total Price (LKR) *</Typography>
              </InputLabel>{" "}
              <Input fullWidth {...field} />
            </>
          )}
        />
        <br />
        <br />
        <br />
        <center>
          <Button
            className={classes.nextButton}
            type="submit"
            variant="outlined"
            align="right"
            color="secondary"
          >
            Next
          </Button>
        </center>
      </form>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  nextButton: {
    borderRadius: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.seaWhite,
    },
  },
}));
export default PrimaryDetailForm;
