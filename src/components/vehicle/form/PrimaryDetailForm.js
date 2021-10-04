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
  modelTypes,
  condition,
  manufacturer,
  vehicleType
} from "../../../store/data";

const PrimaryDetailForm = (props) => {
  const [model, setModel] = useState(null);
  const [filterdCategory, setFilterdCategory] = useState(modelTypes);
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const classes = useStyles();

  const handleCategory = (selectedOption) => {
    setModel(selectedOption);
    console.log(selectedOption)
    FilterType(selectedOption);
  };

  const FilterType = (selectedOption) => {
    const newCategory = modelTypes.filter(
      (item) => item.mainCategory === selectedOption.id
    );
    setFilterdCategory(newCategory);
  };

  const onSubmit = (data) => {
    let newData = [
      {
        vehicleType: data.vehicleType,
        vehicleCondition: data.vehicleCondition,
        title: data.title,
        price: data.price,
        modelYear: model,
        modelYear:data.modelYear,
        model:data.model,
        manufacturer:model,
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
          name="price"
          control={control}
          defaultValue=""
          label="price"
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Price (LKR)*</Typography>
              </InputLabel>{" "}
              <Input fullWidth {...field} />
            </>
          )}
        />
          <br />
          <br />
          <br />
        <Controller
          name="vehicleType"
          control={control}
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">
                  Vehicle Type *
                </Typography>
              </InputLabel>
              <Select
                {...field}
                options={vehicleType}
                placeholder="Choose Type"
              />
            </>
          )}
        />
        <br />
        <Controller
          name="manufacturer"
          control={control}
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Manufacturer *</Typography>
              </InputLabel>
              <Select
                {...field}
                options={manufacturer}
                placeholder="Choose Category"
                value={model}
                onChange={handleCategory}
              />
            </>
          )}
        />
        <br />
        <br />
        <Controller
          name="model"
          control={control}
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Model *</Typography>
              </InputLabel>
              <Select
                {...field}
                options={filterdCategory}
                placeholder="Select Model"
              />
            </>
          )}
        />
        <br />
        <br />
        <Controller
          name="vehicleCondition"
          control={control}
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Vehicle Condition *</Typography>
              </InputLabel>
              <Select
                {...field}
                options={condition}
                placeholder="Select Vehicle Condition"
              />
            </>
          )}
        />
        <br />
        <br />

        <Controller
          name="modelYear"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">
                  Model Year *
                </Typography>
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
