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
// onClick={handleClick}

export default function Templates() {
  const history = useHistory();

  function handleClick() {
    history.push("/dashboard/resume");
  }
    return (
            <main className=" col-9 wm">
               <section className="  row p-2  card ">
               <h2 className="p-1">Starter guide</h2>
              </section>
              <section className="row bd-highlight p-2 card">
                <h2 className="p-1">Select Template</h2>
                 
              </section>
              <Grid container spacing={3}>
       
                <Grid item xs={6} className="" >
                  <h4 >Template 1</h4>
                  <img src="/images/templategreen.png" alt="template2" className="img-fluid tempimg card-1" />
                  <div></div>
                </Grid>
                <Grid item xs={6} className="" >
                  <h4 >Template 2</h4>
                  <img src="/images/template.png" alt="template2" className="img-fluid tempimg card-1" />
                  <div></div>
                </Grid>

              </Grid>
                    
          </main>
    )
}
