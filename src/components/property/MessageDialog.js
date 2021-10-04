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
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open} >
        <center><DialogTitle id="customized-dialog-title" onClose={props.handleView}>
          Seller - {props.name}
        </DialogTitle></center>
        <DialogContent dividers>
          <Typography gutterBottom>
            Telephone - {props.telephone}
          </Typography>
          <Typography gutterBottom>
            Email - {props.email}
          </Typography>
          <br/>
          <center><Typography gutterBottom>
          <b>Send Message to the seller </b>
          </Typography></center>
          <br/>
          <TextField
          required
          id="outlined-multiline-static"
          label="Your Name"
          rows={4}
          variant="outlined"
          fullWidth
          onChange={(event) => setName(event.target.value)}
        />
        <br/>
        <br/>
          <TextField
          required
          id="outlined-multiline-static"
          label="email"
          rows={4}
          type="email"
          variant="outlined"
          fullWidth
          onChange={(event) => setEmail(event.target.value)}
        />
         <br/>
        <br/>
          <TextField
          required
          id="outlined-multiline-static"
          label="Enter Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          onChange={(event) => setMessage(event.target.value)}
        />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => props.handleMessageApi(name,email,message,props.userId)} color="primary">
            Reply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
