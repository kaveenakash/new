import React, { useState } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import IconList from "../../reusable/IconList";
import { makeStyles } from "@material-ui/styles";
import BasicDetailForm from "../../reusable/BasicDetailForm";
import PrimaryDetailForm from "./PrimaryDetailForm";
import DescriptionBox from "../../reusable/DescriptionBox";
import ImageBox from "../../reusable/ImageBox";
import PreviewDetails from "./PreviewDetails";
import axios from "axios";
import Spinner from "../../reusable/spinner/Spinner";
import NotificationModal from "../../reusable/NotificationModal";
import {useHistory} from 'react-router-dom'

export default function PropertyAddForm() {
  const [formID, setFormID] = useState(0);
  const [basicData, setBasicData] = useState([]);
  const [primaryData, setPrimaryData] = useState([]);
  const [description, setDescription] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory()
  const userId = localStorage.getItem('userId')

  const submitAllData = async () => {
    let name,
      email,
      tpNumber,
      district,
      area,
      manufacturer,
      model,
      modelYear,
      price,
      title,
      vehicleCondition,
      vehicleType;
    for (let item in basicData) {
      name = basicData[item].name;
      email = basicData[item].email;
      tpNumber = basicData[item].tpNumber;
      district = basicData[item].district.value;
      area = basicData[item].area.value;
    }
    for (let item in primaryData) {
      manufacturer = primaryData[item].manufacturer.value;
      model = primaryData[item].model.value;
      modelYear = primaryData[item].modelYear;
      price = primaryData[item].price;
      title = primaryData[item].title;
      vehicleCondition = primaryData[item].vehicleCondition.value;
      vehicleType = primaryData[item].vehicleType.value;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("tpNumber", tpNumber);
      formData.append("district", district);
      formData.append("area", area);
      formData.append("manufacturer", manufacturer);
      formData.append("model", model);
      formData.append("modelYear", modelYear);
      formData.append("price", price);
      formData.append("title", title);
      formData.append("vehicleCondition", vehicleCondition);
      formData.append("vehicleType", vehicleType);
      formData.append("description", description);
      formData.append("date", new Date().toDateString());
      formData.append("image", imageData[0].file);
      formData.append("userId", userId);

      const result = await axios.post(
        "https://spmsliit.herokuapp.com/api/vehicle/add-vehicle",
        formData
      );
      setIsSuccessModalOpen(true);
    } catch (error) {}
  };
  const handleClose = () => {
    setIsSuccessModalOpen(false);
    history.push('/vehicle')
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container direction="column" spacing={2}>
          <Grid item className={classes.iconContainer}>
            <IconList formID={formID} />
            <Divider />
          </Grid>
          <Grid item>
            <center>
              <Typography variant="h3" className={classes.formHeader}>
                {formID === 0 && "Basic Details"}
                {formID === 1 && "Primary Details"}
                {formID === 2 && "Description"}
                {formID === 3 && "Upload Photos"}
                {formID === 4 && "Confirm & Submit"}
              </Typography>
            </center>
          </Grid>
          <Grid item>
            <Grid item container justifyContent="center">
              <Grid item xs={6}>
                {formID === 0 && (
                  <BasicDetailForm
                    setFormID={setFormID}
                    setBasicData={setBasicData}
                  />
                )}
                {formID === 1 && (
                  <PrimaryDetailForm
                    setFormID={setFormID}
                    setPrimaryData={setPrimaryData}
                  />
                )}
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container justifyContent="center">
              <Grid item xs={12}>
                {formID == 2 && (
                  <DescriptionBox
                    setFormID={setFormID}
                    setDescription={setDescription}
                  />
                )}
                {formID == 3 && (
                  <ImageBox setFormID={setFormID} setImageData={setImageData} />
                )}
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
          <Grid item>
            {formID == 4 && (
              <PreviewDetails
                basicData={basicData}
                primaryData={primaryData}
                setFormID={setFormID}
                setImageData={setImageData}
                submitAllData={submitAllData}
              />
            )}
          </Grid>
        </Grid>
        {isSuccessModalOpen && (
          <NotificationModal
            IsOpen={isSuccessModalOpen}
            closeModal={handleClose}
            image={imageData ? imageData[0].data_url:''}
          />
        )}
      </Container>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: "3rem",
  },
  card: {
    minHeight: 500,
  },
  iconContainer: {
    marginTop: "2rem",
  },
  formHeader: {
    fontSize: "1.4rem",
    fontWeight: 400,
    color: "#778899",
  },
}));