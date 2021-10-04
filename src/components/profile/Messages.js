import React,{useState,useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import axios from 'axios'

import DeleteDialog from './DeleteDialog'
import MessageViewDialog from './MessageViewDialog'

export default function Messages(props) {
  const classes = useStyles();
  const [openDelete,setOpenDelete] = useState(false)
  const [openView,setOpenView] = useState(false)
  const [messages,setMessages] = useState([])
  const [selectedMessage,setSelectedMessage] = useState('')
  const [selectedMessageId,setSelectedMessageId] = useState('')
  const [selectedReplyMessages,setSelectedReplyMessages] = useState([])
  const [selectedName,setSelectedName] = useState('')
  const userId = localStorage.getItem("userId");
  const handleDelete = (id) =>{
      setOpenDelete(!openDelete)
      let temp = messages
      temp = messages.filter(item => item._id !== id)
      setMessages(temp)
    }
  const handleView = () =>{
    setOpenView(!openView)
  }

  const handleApi = async() =>{
    const data = {
      userId
    }
    const result = await axios.post('http://localhost:9090/api/auth/get-message',data)
    setMessages(result.data.message)
    console.log(result)
  }
  useEffect(() => {
    handleApi()
  }, [])

  const handleReply = async(userId,name,email,replyMessage,messageId) =>{
    setOpenView(!openView)
    const data = {
      userId,
      name,
      email,
      messageId,
      replyMessage
    }
    handleApi()
    await axios.post('http://localhost:9090/api/auth/reply-message',data)
  }
  // handleApi()
  const imageUrl =
    "https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg";
  return (
    <Container>
      <Grid container alignItems="center" direction="column">
      { messages.map(item => {
        console.log(messages)
        return(
          <>
         <Grid item>
          <Card className={classes.root}>
            <CardContent>
              <Grid container item justifyContent="space-between">
                <Grid item>
                  <Grid item container spacing={4}>
                    <Grid item>
                      {/* <img
                        alt="Remy Sharp"
                        width="150rem"
                        src={imageUrl}
                        className={classes.large}
                      /> */}
                      <Avatar
                        alt="Remy Sharp"
                        fontSize="large"
                        src={imageUrl}
                        className={classes.large}
                      />
                    </Grid>
                    <Grid item>
                      <Grid item container direction="column">
                        <Grid item>
                          <Typography variant="h6">
                           
                            <li>User - {item.name}</li>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">
                            <li>Email - {item.email}</li>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    item
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <br />

                    <Grid item>
                      <Grid item container spacing={2}>
                        <Grid item>
                          <Button
                          style={{textTransform:'none'}}
                            variant="contained"
                            endIcon={<VisibilityIcon />}
                            className={classes.viewBtn}
                            onClick={() =>{handleView();setSelectedMessage(item.message);setSelectedName(item.name);setSelectedMessageId(item._id);setSelectedReplyMessages(item.replyMessage)}}
                          >
                            View Message
                          </Button>
                          {/* <EditIcon
                            fontSize="medium"
                            className={classes.editBtn}
                          /> */}
                        </Grid>
                        <Grid item>
                          <Button onClick={() =>handleDelete(item._id)} style={{textTransform:'none'}} variant="contained" endIcon={<DeleteIcon />}  className={classes.deleteBtn}>
                            Delete
                          </Button>
                          {/* <DeleteIcon
                            fontSize="medium"
                            className={classes.deleteBtn}
                          /> */}
                        </Grid>
                        <Grid item>
                          {/* <VisibilityIcon
                            fontSize="medium"
                            className={classes.viewBtn}
                          /> */}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card> 
        </Grid>
                          </>
        )}
        )}
      </Grid>
     
      {openDelete && <DeleteDialog open={openDelete} handleDelete={handleDelete}/>}
      {openView && <MessageViewDialog name={selectedName} message={selectedMessage} selectedMessageId={selectedMessageId} userId={userId} open={openView} handleView={handleView} handleReply={handleReply} replyMessage={selectedReplyMessages}/>}
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
    minWidth: 850,
    backgroundColor: "#E3F2FD",
  },
  editBtn: {
    "&:hover": {
      color: theme.palette.success.main,
    },
  },
  deleteBtn: {
    "&:hover": {
      backgroundColor: theme.palette.error.main,
      color:theme.palette.common.seaWhite
    },
  },
  viewBtn: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color:theme.palette.common.seaWhite
    },
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));
