import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Container from "@material-ui/core/Container"
import ButtonGroup from '@material-ui/core/ButtonGroup';
import axios from 'axios'
import TotalListings from './TotalListings'
import Listings from './Listings'
import Messages from './Messages'
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
    minWidth: 950,
    margin: "3rem",
    padding: "3rem",
    backgroundColor: "#F0F4F6",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(5);
  const [totalListings,setTotalListings] = useState('')          
  const [totalMessages,setTotalMessages] = useState('')          
  const [isListings,setIsListings] = useState(true)
  const userName = localStorage.getItem('fname') + " " + localStorage.getItem('lname')
  const email = localStorage.getItem('email')
  const userId = localStorage.getItem("userId");
  const imageUrl =
    "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png";
  
    const handleTotalListings = (value) =>{
      setTotalListings(value)
    }
    const handleApi = async() =>{
      const data = {
        userId
      }
      const result = await axios.post('http://localhost:9090/api/auth/get-message',data)
     
     setTotalMessages(result.data.message.length)
   
    }
    useEffect(() => {
      handleApi()
    }, [])
    return (
    <Container>
    <Grid container justifyContent="center" direction="column" alignItems="center">
      <Grid item>

      <Card className={classes.root}>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Grid item container spacing={6}>
                <Grid item> <Avatar
                alt="Remy Sharp"
                width="3rem"
                src={imageUrl}
                className={classes.large}
              /></Grid>
                <Grid item>
              <Grid item container direction="column">
                <Grid item>
                  <Grid item container spacing={2} direction="column">
                    <Grid item>
                      <Typography variant="h5">{userName}</Typography>
                      <Typography variant="subtitle1">{email}</Typography>
                      <Typography variant="subtitle2">Seller</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">
                        <Box
                        
                       
                          borderColor="transparent"
                        >
                          <Rating name="disabled" value={value} disabled />
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                </Grid>
                <Grid item></Grid>
              </Grid>

                </Grid>
              </Grid>
            </Grid>
            <Grid item> <TotalListings totalListings={totalListings} totalMessages={totalMessages}/></Grid>
          </Grid>

          
        </CardContent>
      </Card>
      </Grid>
      <br/>
      <Grid item>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button onClick={() => setIsListings(true)}>Listings</Button>
        <Button onClick={() => setIsListings(false)}>Messages</Button>
      </ButtonGroup>
      </Grid>
      <Grid item>
        {isListings ? <Listings handleTotalListings={handleTotalListings}/> : <Messages setTotalMessages={setTotalMessages}/>}
      </Grid>
    </Grid>
    </Container>
  );
}
