import React,{useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid'
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
     
        <IconButton aria-label="close" className={classes.closeButton} onClick={() =>props.onClose()}>
          <CloseIcon />
        </IconButton>
    
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    minWidth:450
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);
  const [replyMessage,setReplyMessage] = useState('')
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div>
     
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={props.handleView}>
          {props.name}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <Grid container spacing={1}>
              <Grid item>
              <AccountCircleIcon color="primary"/> 
              </Grid>
              <Grid item>{props.message}</Grid>
              </Grid> 
          </Typography>
          {props.replyMessage.map(item =>{
            return(

        
           <Grid container spacing={1} justifyContent="flex-end">
              <Grid item>  <Typography align="right" gutterBottom>{item}</Typography></Grid>
              <Grid item>
              <AccountCircleIcon color="secondary"/> 
              </Grid>
              </Grid> 
          
            )
          })}
          <br/>
          <TextField
          id="outlined-multiline-static"
          label="Enter Reply Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          onChange={(event) => setReplyMessage(event.target.value)}
        />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => {props.handleReply(props.userId,props.name,props.email,replyMessage,props.selectedMessageId)}} color="primary">
            Reply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
