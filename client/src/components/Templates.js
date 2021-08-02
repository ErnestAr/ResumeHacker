import React from 'react'
import "../pages/Dashboard/dashboard.css"
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom'
import JSZip from 'jszip';
import htmlTemp from "../download/template1/templatehtml1"
import cssTemp from "../download/template1/templatecss1"
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {DropzoneArea} from 'material-ui-dropzone'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// onClick={handleClick}

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 500,
  },
  list: {
    width: '100%',
  }
});


export default function Templates() {
  const history = useHistory();
  function handleClick() {
    history.push("/dashboard/resume");
  }
  const classes = useStyles();
    return (
              <main className=" col-9 wm">
                <section className="  row p-2  card ">
                <h2 className="p-1">Starter guide</h2>
                <h5 className="p-1" style={{color: "grey"}}>This guide will assist you in creating  modern, interactive and responcive Developer Resume. </h5>
                <List component="nav" className={classes.list} aria-label="mailbox folders">
                  <ListItem button>
                    <ListItemText primary="1. Inbox" secondary="hey this is a secondary text" />
                  </ListItem>
                  <Divider />
                  <ListItem button divider>
                    <ListItemText primary="2. Drafts"  secondary="hey this is a secondary text"/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="3. Trash" secondary="hey this is a secondary text" />
                  </ListItem>
                  <Divider light />
                  <ListItem button>
                    <ListItemText primary="4. Spam"  secondary="hey this is a secondary text"/>
                  </ListItem>
                </List>
                </section>
                <section className="row bd-highlight p-2 card">
                  <h2 className="p-1">Select Template</h2>
                </section>
                <Grid container spacing={3}>
                  <Grid item xs={6} className="" >
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image="/images/templategreen.png"
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Software Developer
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            For a software developer with work experience, this template includes a work experience section and leaves out projects and education.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary" onClick={handleClick}>
                          Create Resume
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={6} className="" >
                    <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image="/images/templateblue.png"
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Software Developer (Entry Level)
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              For a software developer who's looking for his first job, this template includes a project section and education and leaves out work experience.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary" onClick={handleClick}>
                            Create Resume
                          </Button>
                        </CardActions>
                      </Card>
                  </Grid>
                </Grid>
              </main>
    )
}
