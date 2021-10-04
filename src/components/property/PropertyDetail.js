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
import {propertyAdds} from '../../store/data'
import MessageDialog from './MessageDialog'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import axios from 'axios'
const PropertyDetail = (props) => {
  
  const [vertical,setVertical] = useState('top')
  const [horizontal,setHorizontal] = useState('center')
  const history = useHistory();
  const params = useParams();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const [openView,setOpenView] = useState(false)
  const [propertyData,setPropertyData] = useState([])
  const [selectedData,setSelectedData] = useState([])
  const handleHomeLink = (event) => {
    event.preventDefault();
    history.replace("/");
  };
  const handleView = () =>{
    setOpenView(!openView)
  }
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleMessageApi = async(name,email,message,userId) =>{
    setOpenView(!openView)
    const data = {
      name,
      email,
      message,
      userId
    }
    try {
      
      await  axios.post('https://spmsliit.herokuapp.com/api/auth/save-message',data)
      setOpen(true);
    } catch (error) {
      
    }
  
  }
 
   
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
   
  useEffect(() =>{

    async function findVehicle() {
      // console.log(result)
      const selectedVehicle = propertyAdds.filter(item => item.id == 2)
      
      setPropertyData(selectedVehicle)
      const result = await axios.get(`https://spmsliit.herokuapp.com/api/property/get-property/${params.id}`)
      setSelectedData(result.data)
    }
    findVehicle()
  },[]) 

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
                  Property
                </Link>
              </Breadcrumbs>
            </Grid>
           
          </Grid>
          {propertyData.map(item => {
            return(
          <Grid item>
              <Grid item container direction="column" alignItems="flex-start" >
                  <Grid item className={classes.headerContainer}>
                    
                    <Typography variant="h5" className={classes.header}>{selectedData.title}</Typography>
                  
                  </Grid>
                  <Grid item>
                  {/* <Typography variant="subtitle1" className={classes.subTitle}>For Sale By {item.user} on {item.date}, {item.district}, {item.town}</Typography> */}
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
                                  <AmountCard handleView={handleView} amount={selectedData.price ?  selectedData.price : 1500000} leaseRental={selectedData.price/20} downPayment={((selectedData.price/40) + 100000)} boxOneTitle={'BEST LEASE RENTAL'} boxTwoTitle={'DOWN PAYMENT'}/>
                                      {/* <AmountCard amount={item.amount} leaseRental={item.leaseRental} downPayment={item.downPayment} boxOneTitle={'INSTALLEMENT'} boxTwoTitle={'DOWN PAYMENT'}/> */}
                                  </Grid>
                                  <Grid item className={classes.descriptionTableContainer}>
                                      <DescriptionTable propertyDetails={selectedData ? selectedData : []}/>
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
              {openView && <MessageDialog handleMessageApi={handleMessageApi} userId={selectedData.userId} name={selectedData.name} email={selectedData.email} telephone={selectedData.tpNumber} open={openView} handleView={handleView}/>}
          </Grid>

            )
          })}
        </Grid>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
        <Alert onClose={handleClose} severity="success">
          Send Successfull!
        </Alert>
      </Snackbar>
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

export default PropertyDetail;
