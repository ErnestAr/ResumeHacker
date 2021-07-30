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
const zip = new JSZip();
const fs = require('fs');

export default class ResumeForm extends React.Component {
    state = {
        FirstName: '',
        LastName: '',
        Cell: '',
        Email: '',
      }

      // save values to state
      handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })


  
      // create zip file and initialize download
      createzip() {
        zip.file("index.html", htmlTemp());
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
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">First name<span className="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Enter your first name" onChange={this.handleChange}/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Last name<span className="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your last name"  onChange={this.handleChange}/> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Email<span className="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" onChange={this.handleChange}/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Phone number<span className="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder=""  onChange={this.handleChange}/> </div>
                            </div>
                            {/* <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Job title<span className="text-danger"> *</span></label> <input type="text" id="job" name="job" placeholder="" onBlur="validate(5)"/> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">What would you be using Flinks for?<span className="text-danger"> *</span></label> <input type="text" id="ans" name="ans" placeholder="" onBlur="validate(6)"/> </div>
                            </div>*/}
                          
                        </form>
                        <div className="row justify-content-end">
                                <button type="submit" onClick={ this.createzip} className="btn-block btn-primary me-2 col-3" >Create Interactive Resume</button>  
                        </div> 
                    </div>
                    <div className="row justify-content-end">
                        <button className="btn-block btn-primary me-5 col-3" onClick={() => this.nextPath('/dashboard')}>Close Form</button>  
                    </div> 
      </main>
    )
      }
}
