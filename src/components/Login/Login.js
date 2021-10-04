import React,{useState} from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'

import {loginValidate} from '../../store/loginActions'


const Login = (props) => {
  
  return (
    <React.Fragment>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="http://localhost:3000/">
        seller.lk
        </Link>{" "}
        {" © "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </React.Fragment>
  );
};
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const history = useHistory()

  const responseGoogle = (response) => {
    console.log(response);
    props.setLoginData(response)
    history.push('/')
  };
  const loginHandler = async(event) =>{
    event.preventDefault()
    let data = {
      email,
      password
    }
    try {
      const response = await dispatch(loginValidate(data))
 
    } catch (error) {

    }

  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => setEmail(event.target.value)}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
          {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event) => loginHandler(event)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" href="http://localhost:3000/register">
                {"Don't have an account? Sign Up"} 
              </Link>
            </Grid>
          </Grid>
          <br/>
          <center>
            <GoogleLogin
            clientId="496877226261-n7lir6vjuj76598ronn6sj6ng2bk97ok.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            
          />
          </center>
        </form>
      </div>
      <Box mt={4}>
        <Login />
      </Box>
    </Container>
  );
}
