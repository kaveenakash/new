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
import PreviewDetails from "../PreviewDetails";
import Spinner from "../../reusable/spinner/Spinner";
import axios from 'axios'

export default function BusinessAddForm() {
  const [formID, setFormID] = useState(0);
  const [basicData, setBasicData] = useState([]);
  const [primaryData, setPrimaryData] = useState([]);
  const [description, setDescription] = useState([]);
  const [imageData, setImageData] = useState([]);
  const classes = useStyles();


  const submitAllData = () =>{
    alert('HEllo')
    // axios.get('http://localhost:9090/api/service/get-service').then(res => console.log(res))
    axios.post('http://localhost:9090/api/service/add-service',primaryData).then(res => console.log(res))
  }

  return (
    <React.Fragment>
      <Container>
        <Grid container direction="column" spacing={2}>
          <Grid item className={classes.iconContainer}>
            <IconList formID={formID}/>
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
