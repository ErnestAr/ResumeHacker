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
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {GiHamburgerMenu} from "react-icons/gi"


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
    alignItems: 'center',
  },
  fullList: {
    width: 'auto',
  },
  hamburger: {
      color: "white",
  }
}));


export default function Navbar () {
    const [error, setError] = useState("")
    const currentUser  = useAuth()
    const history = useHistory()
    const classes = useStyles();
    const {logout} = useAuth()
    const [drawer, setDrawer] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawer(open);
      };

      const list = () => (
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
              <ListItem button >
                <ListItemText onClick={handleDashboard} primary="Dashboard" />
              </ListItem>
              <ListItem button >
                <ListItemText primary="Account" />
              </ListItem>
              <ListItem button >
                <ListItemText primary="About" />
              </ListItem>
              {currentUser.currentUser ?
              <ListItem button >
                <ListItemText primary="Logout" />
              </ListItem>
              :
            <ListItem button >
            <ListItemText primary="Login" />
            </ListItem>
            }


          </List>
        </div>
      );

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
            <React.Fragment>
          <Button onClick={toggleDrawer( true)}><GiHamburgerMenu className={classes.hamburger} size={25}/></Button>
          <Drawer anchor="top" open={drawer} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
        </Toolbar>
        </AppBar>

    );
};