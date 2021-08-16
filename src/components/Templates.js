import React from 'react'
import "./dashboard.css"
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {BsCircleFill} from 'react-icons/bs';
import {VscTasklist} from 'react-icons/vsc'
// onClick={handleClick}

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    border: '1px solid #d9d9d9',
  },
  media: {
    height: 500,
  },
  list: {
    width: '100%',
  },
  green: {
    color: "#6c9",
  },
  blue: {
    color: "#97C8EB",
  },
  dark: {
    color: "#3d3e42",
  },


});


export default function Templates() {
  const history = useHistory();
  function handleClick() {
    history.push("/dashboard/resume");
  };
  function handleClickblue() {
    history.push("/dashboard/resumeblue");
  };
  function handleClick1() {
    // direct user to different url
    const href="https://hackernoon.com/use-custom-domain-with-github-pages-2-straightforward-steps-cf561eee244f";
    window.open(href, '_blank');
  }

  const classes = useStyles();
    return (
              <main className=" col-9 wm">
                <section className="  row p-2 pb-3  card ">
                <h2 className="p-1 ps-3">Starter guide  <VscTasklist size={40}/> </h2>
                <h5 className="p-1 ps-3" style={{color: "grey"}}>This guide will assist you in creating  modern, interactive and responcive Developer Resume. </h5>
                <List component="nav" className={classes.list} aria-label="mailbox folders">
                  <ListItem divider >
                    <ListItemText primary="1. Choose the template" secondary="There are different templates available, choose the one most appropriate for your future employment and current situation." />
                  </ListItem>
                  <Divider />
                  <ListItem  divider>
                    <ListItemText primary="2. Complete resume form"  secondary="The resume form will require you to fill out information about yourself and upload an avatar. Make sure to check spelling before submiting "/>
                  </ListItem>
                  <ListItem divider >
                    <ListItemText primary="3. Download and unzip template folder" secondary="When you click on 'Create Resume' button, a file containing your HTML, CSS and Avatar will be downloaded to your machine. Try it out by launching your HTML file in your browser." />
                  </ListItem>
                  <Divider />
                  <ListItem divider >
                    <ListItemText  primary="4. Deploy your resume with GitHub Pages"  secondary="Final Step! Deploy your new resume to GitHub Pages to make it accessable for your future employers or clients! Follow inctructions in the link to deploy by clicking the lick below. "/>
                  </ListItem>
                  <ListItem  divider button>
                    <ListItemText onClick={handleClick1} primary="GitHub Pages Instructions "  secondary="Read more.."/>
                  </ListItem>
                </List>
                </section>
                <section className="row bd-highlight ps-1 ms-1 ">
                  <h2 className=" ps-2 ">Select Template</h2>
                  <Divider/>
                <Grid container spacing={3} className="mt-2">
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
                            Software Developer <BsCircleFill className={classes.green}/> <BsCircleFill className={classes.dark}/>
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
                              Software Developer (Entry Level) <BsCircleFill className={classes.blue}/>  <BsCircleFill className={classes.dark}/>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              For a software developer who's looking for his first job, this template includes a project section and education and leaves out work experience.
                              
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary" onClick={handleClickblue}>
                            Create Resume
                          </Button>
                        </CardActions>
                      </Card>
                  </Grid>
                </Grid>
                </section>
              </main>
    )
}
