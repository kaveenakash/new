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
  propertAdType,
  areas,
  propertAdCategory,
  propertType,
} from "../../../store/data";

const PrimaryDetailForm = (props) => {
  const [category, setCategory] = useState(null);
  const [filterdCategory, setFilterdCategory] = useState(propertType);
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
    const newCategory = propertType.filter(
      (item) => item.mainCategory === selectedOption.id
    );
    setFilterdCategory(newCategory);
  };

  const onSubmit = (data) => {
    let newData = [
      {
        advertisementType: data.advertisementType,
        bathrooms: data.bathrooms,
        bedrooms: data.bedrooms,
        price: data.price,
        propertyCategory: category,
        propertyType:data.propertyType,
        size:data.size,
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
          name="advertisementType"
          control={control}
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">
                  Advertisement Type *
                </Typography>
              </InputLabel>
              <Select
                {...field}
                options={propertAdType}
                placeholder="Choose Type"
              />
            </>
          )}
        />
        <br />
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
          name="propertyCategory"
          control={control}
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Property Category *</Typography>
              </InputLabel>
              <Select
                {...field}
                options={propertAdCategory}
                placeholder="Choose Category"
                value={category}
                onChange={handleCategory}
              />
            </>
          )}
        />
        <br />
        <br />
        <Controller
          name="propertyType"
          control={control}
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Property Type *</Typography>
              </InputLabel>
              <Select
                {...field}
                options={filterdCategory}
                placeholder="Choose Type"
              />
            </>
          )}
        />
        <br />
        <br />

        <Controller
          name="size"
          control={control}
          defaultValue=""
          label="Advertisement Type"
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">
                  Size of the Land With Units(perch,acres)*
                </Typography>
              </InputLabel>{" "}
              <Input fullWidth {...field} />
            </>
          )}
        />
        <br />
        <br />
        {category && category.id === 2 &&(<Controller
          name="bedrooms"
          control={control}
          defaultValue=""
          label="Advertisement Type"
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Bedrooms *</Typography>
              </InputLabel>{" "}
              <Input fullWidth {...field} />
            </>
          )}
        />)}
        <br />
        <br />
        {category && category.id === 2 && (<><Controller
          name="bathrooms"
          control={control}
          defaultValue=""
          label="Advertisement Type"
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Bathrooms *</Typography>
              </InputLabel>{" "}
              <Input fullWidth {...field} />
            </>
          )}
          />
        <br />
        <br />
        </>
          )}
        <Controller
          name="price"
          control={control}
          defaultValue=""
          label="Advertisement Type"
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
