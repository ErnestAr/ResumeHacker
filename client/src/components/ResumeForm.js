import React from 'react'
import "../pages/Dashboard/dashboard.css"
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { JSZip } from 'jszip';
export default class ResumeForm extends React.Component {
    state = {
        FirstName: '',
        LastName: '',
        Cell: '',
        Email: '',
      }
      handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })
      async downloadTemplate(event) {
        event.preventDefault();
        console.log('where am I?')
        try {
          const response = await axios.get('/download');
            console.log(response.data)
            saveAs(response.data, 'Navbar.js');
          
        } catch (error) {
          console.error(error);
        }
      }
      
      createzip() {
        const zip = new JSZip();
        zip.file("Hello.txt", "Hello World\n");
        zip.generateAsync({type:"blob"}).then(function(content) {
          // see FileSaver.js
          saveAs(content, "example.zip");
      });
      }
      nextPath(path) {
        this.props.history.push(path);
      }
       // name="name" onChange={this.handleChange} <input type="number" placeholder="Receipt ID" name="receiptId" onChange={this.handleChange} />
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
