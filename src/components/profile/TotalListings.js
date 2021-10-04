import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const percentage = 66;
export default function TotalListings(props) {
    return (
      
        <Grid container direction="column" alignItems="center">
            <Grid item>
                <Typography variant="h5" style={{fontWeight:600,fontSize:"18px"}}>Total Listings</Typography>
            </Grid>
            <Grid item>
          
                <Typography variant="h6" style={{fontWeight:600}}><Chip label={props.totalListings} /></Typography>

          </Grid>
          <br/>
            <Grid item>
                <Typography variant="h5" style={{fontWeight:600,fontSize:"18px"}}>Messages</Typography>
            </Grid>
            <Grid item>
          
                <Typography variant="h6" style={{fontWeight:600}}> <Chip label={props.totalMessages} /></Typography>

          </Grid>
          </Grid>
        
   

    )
}
