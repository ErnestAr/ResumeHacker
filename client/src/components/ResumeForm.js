import React, { useRef} from 'react'
import "../pages/Dashboard/dashboard.css"
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
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



const zip = new JSZip();
const fs = require('fs');



const skills = [
    {
        name: '',
    },
    {
    name: 'JavaScript',
}
, {
    name: 'HTML',
},
{
    name: 'CSS',
},
{
    name: 'JQuery',
},
{
    name: 'React',
},
{
    name: 'Node.js',
},
{
    name: 'MongoDB',
},
{
    name: 'Express',
},
{
    name: 'Angular',
},
{
    name: 'Vue.js',
},
]

const nums = [1,2,3,4,5,6,7,8,9,10]



export default class ResumeForm extends React.Component {


    state = {
    
        firstName: '',
        lastName: '',
        cell: '',
        email: '',
        address:    '',
        website: '',
        overview: '',
        github: '',
        linkedin: '',
        facebook: '',
        company1: '',
        company2: '',
        company3: '',
        startdate1: '',
        startdate2: '',
        startdate3: '',
        enddate1: '',
        enddate2: '',
        enddate3: '',
        description1: '',
        description2: '',
        description3: '',
        position1: '',
        position2: '',
        position3: '',
        hobbies: '',
        number: 0,
        files: [],
        skills: []
}
        
        useStyles = makeStyles((theme) => ({
            root: {
            width: 500,
            '& > * + *': {
                marginTop: theme.spacing(3),
            },
            },
        }));
        
        classes = this.useStyles;
      // save values to userInput
      handleChange = ({ target: { value, name }}) => this.setState( { [name]: value })
    
    //   create skill key value pairs
      handleSkillChange =  (input) => { 
        const skills = this.state.skills;
        const inputLevel = this.state.number
        this.setState({ skills: {...skills, [input[input.length - 1]]: inputLevel}})}
    //   use spread operator to save to state 
      // create zip file and initialize download
    createzip = () =>{
        
        zip.file("index.html", htmlTemp(this.state));
        zip.file("style.css", cssTemp(this.state.skills));
        // add image from files state to zip
        this.state.files.forEach((file) => {
            zip.file(file.name, file.data);
        });
            zip.generateAsync({type:"blob"}).then(function (blob) { 
                saveAs(blob, "Template1.zip");                          
            }, function (err) {
                console.error(err);
            });
      }
      // router control
      nextPath(path) {
        this.props.history.push(path);
      }

    //   change rating for skill
      changeNumber = (event) => {
          this.setState({ number: event.target.value} );
      }

    // dropdondown handle Change
    handleDrop(files){
        this.setState({
          files: files
        });
      }

      render() {
    return (
      <main className=" col-9 p-1">
                    <div className="card">
                        <form className="form-card" >
                            <h3 className=" col-3 my-2 " >General Information</h3>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">First name<span className="text-danger"> *</span></label> <input type="text" id="fname" name="firstName" placeholder="Enter your first name" onChange={this.handleChange}/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Last name<span className="text-danger"> *</span></label> <input type="text" id="lname" name="lastName" placeholder="Enter your last name"  onChange={this.handleChange}/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Address(Country, state)<span className="text-danger"> *</span></label> <input type="text" id="lname" name="address" placeholder="Canada, Ontario"  onChange={this.handleChange}/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Website/Portfolio link<span className="text-danger"> *</span></label> <input type="text" id="lname" name="website" placeholder="yourportfolio.com"  onChange={this.handleChange}/> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Email<span className="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="example@gmail.com" onChange={this.handleChange}/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Phone number<span className="text-danger"> *</span></label> <input type="text" id="mob" name="cell" placeholder="888-888-8888"  onChange={this.handleChange}/> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Professional Overview<span className="text-danger"> *</span></label> <input type="text" name="overview" placeholder="" onChange={this.handleChange}/> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3"> <FaGithub size={30} style ={{color: "#3A7CA5"}}/>     Github <span className="text-danger"> *</span></label> <input type="text" name="git" placeholder="" onChange={this.handleChange} /> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3"> <FaLinkedin size={30} style ={{color: "#3A7CA5"}}/>   LinkedIn<span className="text-danger"> *</span></label> <input type="text" name="linkin" placeholder="" onChange={this.handleChange}/> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3"><FaFacebook size={30} style ={{color: "#3A7CA5"}}/>    Facebook<span className="text-danger"> *</span></label> <input type="text" name="facebook" placeholder="" onChange={this.handleChange} /> </div>
                            </div>
                        </form>
                        <label className="form-control-label px-3 my-2">Upload photo or avatar image<span className="text-danger"> *</span></label> 
                        <DropzoneArea
                            onChange={this.handleDrop.bind(this)}
                            />
                    </div>
                    <div className="card">
                        <form className="form-card" >
                            <h3 className=" col-3 my-2 " >Work Experience</h3>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Company Name<span className="text-danger"> *</span></label> <input type="text"  name="company1" placeholder="" onChange={this.handleChange}/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Position<span className="text-danger"> *</span></label> <input type="text"  name="position1" placeholder="" onChange={this.handleChange}/> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Position Description<span className="text-danger"> *</span></label> <input type="text" name="description1" placeholder="" onChange={this.handleChange} /> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Start date<span className="text-danger"> *</span></label> <input type="text"  name="startdate1" placeholder="Nov-2019" onChange={this.handleChange}/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">End Date<span className="text-danger"> *</span></label> <input type="text"  name="enddate1" placeholder="Oct-2020" onChange={this.handleChange}/> </div>
                            </div>
                        </form>
                    </div>
                    <div className="card">
                        <form className="form-card" >
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Company Name<span className="text-danger"> *</span></label> <input type="text"  name="company2" placeholder="" onChange={this.handleChange}/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Position<span className="text-danger"> *</span></label> <input type="text"  name="position2" placeholder="" onChange={this.handleChange}/> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Position Description<span className="text-danger"> *</span></label> <input type="text" name="description2" placeholder="" onChange={this.handleChange} /> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Start date<span className="text-danger"> *</span></label> <input type="text"  name="startdate2" placeholder="Nov-2019" onChange={this.handleChange}/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">End Date<span className="text-danger"> *</span></label> <input type="text"  name="enddate3" placeholder="Oct-2020" onChange={this.handleChange}/> </div>
                            </div>
                        </form>
                    </div>
                    <div className="card">
                        <form className="form-card" >
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Company Name<span className="text-danger"> *</span></label> <input type="text"  name="company3" placeholder="" onChange={this.handleChange}/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Position<span className="text-danger"> *</span></label> <input type="text"  name="position3" placeholder="" onChange={this.handleChange}/> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Position Description<span className="text-danger"> *</span></label> <input type="text" name="description3" placeholder="" onChange={this.handleChange} /> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Start date<span className="text-danger"> *</span></label> <input type="text"  name="startdate3" placeholder="Nov-2019" onChange={this.handleChange}/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">End Date<span className="text-danger"> *</span></label> <input type="text"  name="enddate3" placeholder="Oct-2020" onChange={this.handleChange}/> </div>
                            </div>
                           
                        </form>
                    </div>
                    <div className="card">
                        <div className="form-card classes"  style={this.classes.root} >
                            <h3 className=" col-3 my-2 " > Technical Skills</h3>
                                <p className="  my-2 " style={{color: "grey"}}> Choose level of proficiency, then add a technology ("1" - Beginer, "10"-Expert). Limit your selection to be below 8. </p>
                                <FormControl className="mb-3" variant="filled" style={{width: "90px"}} >
                                <InputLabel id="demo-simple-select-label" >Level</InputLabel>
                                    <Select  
                                    
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    
                                    value={this.number}
                                    onChange={this.changeNumber}
                                    defaultValue={this.number}
                                    >
                                    
                                    {nums.map((num) => (
                                    <MenuItem  value={num}>{num}</MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                            {/* Create list to choose skills and and rating */}
                                <Autocomplete
                                    multiple
                                    id="tags-filled"
                                    options={skills.map((option) => option.name)}
                                    
                                    freeSolo
                                    renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip variant="outlined" label={option} {...getTagProps({ index })}  />
                                    ))
                                    
                                    }
                                    // onChange={this.handleChange(value)}
                                    renderInput={(params) => (
                                    <TextField {...params} variant="filled" label="" placeholder="Select or Enter Skill"  />
                                    )}
                                    onChange={(event, value) => {this.handleSkillChange(value)}}
                                />
                        </div>
                    </div>
                    <div className="card">
                        <form className="form-card" >
                            <h3 className=" col-4 my-2 " >Non-work related activities</h3>

                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Hobbies <span className="text-danger"> *</span></label> <input type="text" name="hobbies" placeholder="Skiing, Hiking, Martial Arts, etc. " onChange={this.handleChange} /> </div>
                            </div>
                            <div className="row justify-content-end">
                                <h3 className=" col-3 text-center bg-color rounded btn-acc acc p-2 me-2 mt-2" onClick={this.createzip}>Create Resume</h3>
                            </div>             
                        </form>
                    </div>
                    <div className="row justify-content-end">
                        <h3 className=" text-center bg-color rounded btn-acc acc me-5 p-2" style={{width: "265px"}} onClick={() => this.nextPath('/dashboard')}>Close Form</h3>  
                    </div> 
      </main>
    )
      }
}
