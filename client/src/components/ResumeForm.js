import React from 'react'
import "../pages/Dashboard/dashboard.css"
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import JSZip from 'jszip';
import htmlTemp from "../download/template1/templatehtml1"
import cssTemp from "../download/template1/templatecss1"
import jsTemp from '../download/template1/templatejs1';
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const zip = new JSZip();
const fs = require('fs');



export default class ResumeForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        cell: '',
        email: '',
      }

      // save values to state
      handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })


  
      // create zip file and initialize download
      createzip = () =>{
          console.log(this.state.FirstName);
        zip.file("index.html", htmlTemp(this.state));
        zip.file("index.js", jsTemp());
        zip.file("style.css", cssTemp());
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

      render() {
    return (
      <main className=" col-9 p-1">
                    <div className="card">
                        <h5 className="text-center mb-4">Powering world-className companies</h5>
                        <form className="form-card" >
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">First name<span className="text-danger"> *</span></label> <input type="text" id="fname" name="firstName" placeholder="Enter your first name" onChange={this.handleChange}/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Last name<span className="text-danger"> *</span></label> <input type="text" id="lname" name="lastName" placeholder="Enter your last name"  onChange={this.handleChange}/> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Email<span className="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="example@gmail.com" onChange={this.handleChange}/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Phone number<span className="text-danger"> *</span></label> <input type="text" id="mob" name="cell" placeholder="888-888-8888"  onChange={this.handleChange}/> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Professional Overview<span className="text-danger"> *</span></label> <input type="text" name="overview" placeholder="" /> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3"> <FaGithub size={30} style ={{color: "#3A7CA5"}}/>     Github <span className="text-danger"> *</span></label> <input type="text" name="git" placeholder="" /> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3"> <FaLinkedin size={30} style ={{color: "#3A7CA5"}}/>   LinkedIn<span className="text-danger"> *</span></label> <input type="text" name="linkin" placeholder="" /> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3"><FaFacebook size={30} style ={{color: "#3A7CA5"}}/>    Facebook<span className="text-danger"> *</span></label> <input type="text" name="facebook" placeholder="" /> </div>
                            </div>
                        </form>
                        <div className="row justify-content-end">
                             <h3 className=" col-3 text-center bg-color rounded btn-acc acc p-2 me-2 mt-2" onClick={this.createzip}>Create Resume</h3>
                        </div> 
                    </div>
                    <div className="row justify-content-end">
                    <h3 className=" text-center bg-color rounded btn-acc acc me-5 p-2" style={{width: "265px"}} onClick={() => this.nextPath('/dashboard')}>Close Form</h3>  
                    </div> 
      </main>
    )
      }
}
