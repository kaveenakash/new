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
  eCondition,
  electronicCategory
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
        electronicCategory: data.electronicCategory,
        condition: data.condition,
        title: data.title,
        price: data.price,
        modelYear: model,
        color:data.color,
        models:data.models,
        manufacture:data.manufacture,
        
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
          name="electronicCategory"
          control={control}
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">
                Electronic Category *
                </Typography>
              </InputLabel>
              <Select
                {...field}
                options={electronicCategory}
                placeholder="Choose Type"
              />
            </>
          )}
        />
        <br />
        
        <br />
        <br />
        <Controller
          name="condition"
          control={control}
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Item Condition *</Typography>
              </InputLabel>
              <Select
                {...field}
                options={eCondition}
                placeholder="Select Item Condition"
              />
            </>
          )}
        />

        <br />
        <br />

        <Controller
          name="manufacture"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">
                Manufacture *
                </Typography>
              </InputLabel>{" "}
              <Input fullWidth {...field} />
            </>
          )}
        />

        <br />
        <br />

        <Controller
          name="models"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">
                Model *
                </Typography>
              </InputLabel>{" "}
              <Input fullWidth {...field} />
            </>
          )}
        />
        <br />
        <br />

        <Controller
          name="color"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">
                Item Color *
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
