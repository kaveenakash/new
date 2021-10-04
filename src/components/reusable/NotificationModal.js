import React from 'react';
import Modal from 'react-modal';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ModalCard from './ModalCard'


const customStyles = {
  content: {
    padding:0,
    top: '45%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



function ErrorModel(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(props.IsOpen);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {

    props.closeModal()
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
      
     <ModalCard closeModal={props.closeModal} image={props.image}/>


          
  
   
      </Modal>
    </React.Fragment>
  );
}


const useStyles = makeStyles((theme) => ({
 
}));
export default ErrorModel;
