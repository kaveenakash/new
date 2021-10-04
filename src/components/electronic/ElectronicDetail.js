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
import {electronicAdds} from '../../store/data'
import axios from 'axios'


const ElectronicDetail = (props) => {
  const history = useHistory();
  const params = useParams();
  const classes = useStyles();
  const theme = useTheme();

  const [electronicData,setElectronicData] = useState([])
  const [selectedData,setSelectedData] = useState([])

  const handleHomeLink = (event) => {
    event.preventDefault();
    history.replace("/");
  };

  useEffect(() =>{

    async function findElectronic() {
      // console.log(result)
      const selectedElectronic = electronicAdds.filter(item => item.id == 2)
      
      setElectronicData(selectedElectronic)
      console.log(selectedElectronic)
      const result = await axios.get(`http://localhost:9090/api/electronic/get-electronic/${params.id}`)
      setSelectedData(result.data)
      console.log(result)
    }
    findElectronic()
  },[]) 

  console.log(params.id)
  return (
    <React.Fragment>
      <Container fixed className={classes.container}>
        <Grid container direction="column" className={classes.root}>
          <Grid item container justify="flex-start">
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
                  Electronic
                </Link>
              </Breadcrumbs>
            </Grid>
           
          </Grid>
          
         
          <Grid item>
              <Grid item container direction="column" alignItems="flex-start" >
                  <Grid item className={classes.headerContainer}>
                    
                    <Typography variant="h5" className={classes.header}>{selectedData.title}</Typography>
                  
                  </Grid>
                  <Grid item>
                  <Typography variant="subtitle1" className={classes.subTitle}>For Sale By {selectedData.name} on {new Date().toLocaleDateString()}, {selectedData.district}, {selectedData.area}</Typography>
                  </Grid>

                  <Grid item className={classes.sliderContainer}>
                      <Grid item container alignItems="flex-start" spacing={2}>
                          <Grid item >
                              <CarouselCard imageData={selectedData.images ? selectedData.images:[]}/>
                          </Grid>
                          <Grid item>
                              <Grid item container direction="column">
                                  <Grid item>
                                      <AmountCard amount={selectedData.price ?  selectedData.price : 1500000} leaseRental={selectedData.price/20} downPayment={((selectedData.price/40) + 100000)} boxOneTitle={'BEST LEASE RENTAL'} boxTwoTitle={'DOWN PAYMENT'}/>
                                  </Grid>
                                  <Grid item className={classes.descriptionTableContainer}>
                                      <DescriptionTable electronicDetails={selectedData ? selectedData : []}/>
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

export default ElectronicDetail;
