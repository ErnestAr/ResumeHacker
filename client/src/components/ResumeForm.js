import React from 'react'
import "../pages/Dashboard/dashboard.css"
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
export default class ResumeForm extends React.Component {
    state = {
        FirstName: '',
        LastName: '',
        Cell: '',
        Email: '',
      }
    
      handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })
      createAndDownloadPdf = () => {
        axios.post('/create-pdf', this.state)
          .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
            saveAs(pdfBlob, 'newPdf.pdf');
          })
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
                        <form className="form-card" onsubmit="event.preventDefault()">
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">First name<span className="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Enter your first name" onblur="validate(1)"/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Last name<span className="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your last name" onblur="validate(2)"/> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Email<span className="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" onblur="validate(3)"/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Phone number<span className="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                            </div>
                            {/* <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Job title<span className="text-danger"> *</span></label> <input type="text" id="job" name="job" placeholder="" onblur="validate(5)"/> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">What would you be using Flinks for?<span className="text-danger"> *</span></label> <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"/> </div>
                            </div>*/}
                          
                        </form>
                        <div className="row justify-content-end">
                                 <button type="submit" className="btn-block btn-primary me-2 col-3">Create Interactive Resume</button>  
                        </div> 
                    </div>
                    <div className="row justify-content-end">
                        <button className="btn-block btn-primary me-5 col-3" onClick={() => this.nextPath('/dashboard')}>Close Form</button>  
                    </div> 
      </main>
    )
      }
}
