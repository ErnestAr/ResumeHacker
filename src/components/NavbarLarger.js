import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import {FcDocument} from "react-icons/fc"


const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: 0,
    padding: 0,
    fontFamily:'Courgette , cursive',
    fontSize: '1.5rem',
  },
  logo: {
      marginRight: theme.spacing(2),
      color: "white",
      flexGrow: 1,
      
  },
  loginButton: {
    border: "1px solid white",
    borderRadius: "5px",
  },
  colormain: {
    backgroundColor: "#3A7CA5",
  }
}));


export default function Navbar () {
    const [error, setError] = useState("")
    const currentUser  = useAuth()
    const history = useHistory()
    const classes = useStyles();
    const {logout} = useAuth()

    async function handleLogout(event) {
        event.preventDefault();
        try {
          console.log(currentUser)
          setError("");
          await logout();
          history.push("/login")
        } catch (error)   {
          setError(error.message);
          console.log(error.message);
        }
      }

      function handleLogin() {
        history.push("/login");
    };

    function handleDashboard() {
        history.push("/dashboard");
    }

    function handleAbout() {
      history.push("/about");
  }
  function handleAccount() {
    history.push("/account");
}

    return (
        <AppBar position="static" className={classes.colormain} >
        <Toolbar>
           
            <Typography variant="h6" className={classes.title}>
            ResumeHacker
            </Typography>
            <Button color="inherit" onClick={handleDashboard}>Dashboard</Button>
            <Button color="inherit" onClick={handleAbout}>About</Button>
            <Button color="inherit" onClick={handleAccount}>Account</Button>
            {currentUser.currentUser ?
            <Button className={classes.loginButton} color="inherit" onClick={handleLogout}>
            Logout
            </Button> :
            <Button className={classes.loginButton}  color="inherit" onClick={handleLogin}>
            Login
            </Button>
            }
        </Toolbar>
        </AppBar>

    );
};