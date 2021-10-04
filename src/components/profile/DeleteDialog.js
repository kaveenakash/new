import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function DeleteDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <center><DialogTitle id="responsive-dialog-title">{"Delete"}</DialogTitle></center>
        <DialogContent>
          <DialogContentText>
            If You want Delete Click Agree Button
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => props.handleDelete()} color="warning">
            Cancel
          </Button>
          <Button onClick={() => props.handleDelete()} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
