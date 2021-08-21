import React, { useRef } from "react";
import "./dashboard.css";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import htmlTemp from "../download/template1/templatehtml1";
import cssTemp from "../download/template1/templatecss1";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { DropzoneArea } from "material-ui-dropzone";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid } from "@material-ui/core";


const zip = new JSZip();
const fs = require("fs");

const skills = [
  {
    name: "",
  },
  {
    name: "JavaScript",
  },
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JQuery",
  },
  {
    name: "React",
  },
  {
    name: "Node.js",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Express",
  },
  {
    name: "Angular",
  },
  {
    name: "Vue.js",
  },
];

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default class ResumeForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    cell: "",
    email: "",
    address: "",
    website: "",
    overview: "",
    github: "",
    linkedin: "",
    facebook: "",
    company1: "",
    company2: "",
    company3: "",
    startdate1: "",
    startdate2: "",
    startdate3: "",
    enddate1: "",
    enddate2: "",
    enddate3: "",
    description1: "",
    description2: "",
    description3: "",
    position1: "",
    position2: "",
    position3: "",
    hobbies: "",
    number: 0,
    files: [],
    skills: [],
    dialogValue: { skill: "", level: "" },
    opendialog: false,
    currentSkill: "",
    currentLevel: "",
  };

  // handle dialog close
  handleClickOpen = (value) => {
    this.setState({ currentSkill: value });
    this.setState({ opendialog: true });
  };

  handleClose = (value) => {
    this.setState({ opendialog: false });
    const skills = this.state.skills;
    const skill = this.state.currentSkill;
    const inputLevel = this.state.currentLevel;
    this.setState({
      skills: { ...skills, [skill[skill.length - 1]]: inputLevel },
    });
  };

  updateInputValue = (evt) => {
    this.setState({
      currentLevel: evt.target.value,
    });
  };
  // style for the form
  useStyles = makeStyles((theme) => ({
    root: {
      width: 500,
      "& > * + *": {
        marginTop: theme.spacing(3),
      },
    },
  }));
  classes = this.useStyles;
  // save values to userInput
  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });
  // create zip file and initialize download
  createzip = () => {
    zip.file("index.html", htmlTemp(this.state));
    zip.file("style.css", cssTemp(this.state.skills));
    // add image from files state to zip
    this.state.files.forEach((file) => {
      zip.file(file.name, file);
    });
    zip.generateAsync({ type: "blob" }).then(
      function (blob) {
        saveAs(blob, "Template1.zip");
      },
      function (err) {
        console.error(err);
      }
    );
  };
  // router control
  nextPath(path) {
    this.props.history.push(path);
  }
  //   change rating for skill
  changeNumber = (event) => {
    this.setState({ number: event.target.value });
  };
  // dropdondown handle Change
  handleDrop(files) {
    this.setState({
      files: files,
    });
  }
  render() {
    return (
      <>
       <div className="card">
         <form noValidate autoComplete="off">
         <Grid container spacing={3} >
            <Grid item xs={12}>
                <h3 >General Information</h3>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                 id="standard-basic"
                  name="firstName"
                  onChange={this.handleChange}
                  margin="normal"
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  label=" Last name"
                  autoFocus
                  name="lastName"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                   id="standard-basic"
                   margin="normal"
                   required
                   fullWidth
                   autoFocus
                  name="address"
                  label="Address(Country, state)"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Website/Portfolio link"
                  id="standard-basic"
                   margin="normal"
                   required
                   fullWidth
                   autoFocus
                  name="website"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Email"
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  name="email"
                  onChange={this.handleChange}
                />
              </Grid>


              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Phone"
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  name="cell"
                  onChange={this.handleChange}
                />
              </Grid>

              
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="GitHub"
                  name="github"
                  onChange={this.handleChange}
                />
              </Grid>
      
            
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Linkedin"
                  name="linkedin"
                  onChange={this.handleChange}
                />
              </Grid>
       
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Facebook"
                  name="facebook"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  label="Phone"
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Professional Overiew"
                  name="overview"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <DropzoneArea filesLimit={1} dropzoneText="Drag and drop your photo/avatar or click" label="Photo" onChange={this.handleDrop.bind(this)} />
              </Grid>
              <Grid item xs={12}>
              <h3 >Work Experience</h3>
            </Grid>
            <Grid item xs={12}>
              <h4 style={{ color: "grey" }}>Company 1</h4>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Company"
                  name="company1"
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Position"
                  name="position1"
                  onChange={this.handleChange}
                />
              </Grid>
        
            
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Description"
                  name="description1"
                  onChange={this.handleChange}
                />
              </Grid>
        
            
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Start Date"
                  name="startdate1"
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="End Date"
                  name="enddate1"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
              <h4 style={{ color: "grey" }} >Company 2</h4>
            </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Company"
                  name="company3"
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Position"
                  name="position3"
                  onChange={this.handleChange}
                />
              </Grid>
        
            
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Description"
                  name="description3"
                  onChange={this.handleChange}
                />
              </Grid>
        
            
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Start Date"
                  name="startdate3"
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="End Date"
                  name="enddate3"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
              <h4 style={{ color: "grey" }}>Company 3</h4>
            </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Company"
                  name="company3"
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Position"
                  name="position3"
                  onChange={this.handleChange}
                />
              </Grid>
        
            
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Description"
                  name="description3"
                  onChange={this.handleChange}
                />
              </Grid>
        
            
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Start Date"
                  name="startdate3"
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="End Date"
                  name="enddate3"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <h3> Technical Skills</h3>
              </Grid> 


              <Grid item xs={12}>
              <p style={{ color: "grey" }}>
                Select technology and level of proficiency ("1" - Beginner,
                "10"-Expert).
              </p>
              </Grid> 
            <Grid item xs={12}>
            <Autocomplete
              multiple
              id="tags-filled"
              options={skills.map((option) => option.name)}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField {...params} variant="filled" label="Skills" />
              )}
              onChange={(event, value) => {
                this.handleClickOpen(value);
              }}
            />
            <Dialog
              open={this.state.opendialog}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                Technical Skill Level
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Enter a number between 1 and 10 to indicate your level of
                  proficiency in the skill you selected.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  type="email"
                  fullWidth
                  value={this.state.currentLevel}
                  onChange={this.updateInputValue}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
            </Grid>
            <Grid item xs={12}>
            <h3 >Non-work related activities</h3>
            </Grid>

            <Grid item xs={12} >
                <TextField
                  id="standard-basic"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  label="Hobbies"
                  name="hobbies"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Fab
                variant="extended"
                onClick={this.createzip}
              >
                Create resume
              </Fab>
            </Grid>
         </Grid>
         </form>
       </div>
      </>
    );
  }
}
