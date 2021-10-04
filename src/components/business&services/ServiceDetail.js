import React,{useState,useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory,useParams } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";


import Container from "@material-ui/core/Container";
import CarouselCard from "../reusable/carousel/CarouselCard";
import AmountCard from '../reusable/AmountCard'
import DescriptionTable from "./DescriptionTable";
import DescriptionCard from "./DescriptionCard";
import Warning from "../reusable/warning/Warning";
import {serviceAdds} from '../../store/data'

const ServiceDetail = (props) => {
  const history = useHistory();
  const params = useParams();
  const classes = useStyles();
  const theme = useTheme();

  const [serviceData,setServiceData] = useState([])

  const handleHomeLink = (event) => {
    event.preventDefault();
    history.replace("/");
  };

   
  useEffect(() =>{

    async function findService() {
      // console.log(result)
     

      const selectedService = serviceAdds.filter(item => item.id == params.id)
      setServiceData(selectedService)
      console.log(selectedService)
    }
    findService()
  },[]) 

  console.log(params.id)
  return (
    <React.Fragment>
      <Container fixed className={classes.container}>
        <Grid container direction="column" className={classes.root}>
          <Grid item container justifyContent="flex-start">
            <Grid item>
              <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrumb}>
                <Link color="inherit" href="/" onClick={handleHomeLink}>
                  Home
                </Link>
                <Link
                  color="inherit"
                  href="/getting-started/installation/"
                  onClick={handleHomeLink}
                >
                  Services
                </Link>
              </Breadcrumbs>
            </Grid>
           
          </Grid>
          {serviceData.map(item => {
            return(
          <Grid item>
              <Grid item container direction="column" alignItems="flex-start" >
                  <Grid item className={classes.headerContainer}>
                    
                    <Typography variant="h5" className={classes.header}>{item.name}</Typography>
                  
                  </Grid>
                  <Grid item>
                  <Typography variant="subtitle1" className={classes.subTitle}>For Sale By {item.user} on {item.date}, {item.district}, {item.town}</Typography>
                  </Grid>

                  <Grid item className={classes.sliderContainer}>
                      <Grid item container alignItems="flex-start" spacing={2}>
                          <Grid item >
                              <CarouselCard imageData={item ? item.image:[]}/>
                          </Grid>
                          <Grid item>
                              <Grid item container direction="column">
                                  <Grid item>
                                      <AmountCard amount={item.amount} leaseRental={item.leaseRental} downPayment={item.downPayment} boxOneTitle={'INSTALLEMENT'} boxTwoTitle={'DOWN PAYMENT'}/>
                                  </Grid>
                                  <Grid item className={classes.descriptionTableContainer}>
                                      <DescriptionTable serviceDetails={serviceData}/>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item className={classes.descriptionCardContainer}>
                    <DescriptionCard/>
                  </Grid>
                  <Grid item className={classes.descriptionCardContainer}>
                    <Warning/>
                  </Grid>
              </Grid>
          </Grid>

            )
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};


const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:'1rem'
    },
    breadCrumb:{
        color:theme.palette.common.seaGray
    },
    headerContainer:{
        marginTop:'2rem'
    },
    header:{
        fontFamily:'Roboto',
        color:theme.palette.secondary.main
    },
    subTitle:{
        fontFamily:'Roboto',
        color:theme.palette.secondary.dark
    },
    sliderContainer:{
        marginTop:'1rem'
    },
    descriptionTableContainer:{
        marginTop:'1rem'
    },
    descriptionCardContainer:{
        marginTop:'3rem'
    }
}));

export default ServiceDetail;
