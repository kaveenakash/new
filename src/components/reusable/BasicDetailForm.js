import React, { useState } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

import { districts, areas } from "../../store/data";

const PropertyBasicForm = (props) => {
  const [district, setDistrict] = useState(null);
  const [filterdArea, setFilterdArea] = useState(areas);
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const classes = useStyles();

  const handleDistrict = (selectedOption) => {
    setDistrict(selectedOption);
    FilterArea(selectedOption);
  };

  const FilterArea = (selectedOption) => {
    const newAreas = areas.filter(
      (item) => item.mainCategory === selectedOption.id
    );
    setFilterdArea(newAreas);
  };

  const onSubmit = (data) => {
    let newData = [
      {
        name: data.name,
        tpNumber: data.tpNumber,
        email: data.email,
        name: data.name,
        district: district,
        area: data.area,
      },
    ];
    props.setBasicData(newData)
    props.setFormID(1)
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          label="Display Name"
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Display Name *</Typography>
              </InputLabel>{" "}
              <Input required="true" fullWidth {...field} />
            </>
          )}
        />
        <br />
        <br />
        <Controller
          name="tpNumber"
          control={control}
          defaultValue=""
          label="Display Name"
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">
                  Display Telephone Number *
                </Typography>
              </InputLabel>{" "}
              <Input fullWidth {...field} />
            </>
          )}
        />
        <br />
        <br />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          label="Display Name"
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Display Email *</Typography>
              </InputLabel>{" "}
              <Input fullWidth {...field} />
            </>
          )}
        />
        <br />
        <br />
        <br />
        <Controller
          name="district"
          control={control}
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">
                  Select Your District *
                </Typography>
              </InputLabel>
              <Select
                {...field}
                options={districts}
                value={district}
                onChange={handleDistrict}
              />
            </>
          )}
        />

        <br />
        <br />
        <Controller
          name="area"
          control={control}
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Select Your Area *</Typography>
              </InputLabel>
              <Select {...field} options={filterdArea} />
            </>
          )}
        />
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
export default PropertyBasicForm;
