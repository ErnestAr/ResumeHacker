  
import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import "./dashboard.css"
import {VscAccount} from "react-icons/vsc"



class Dashboard extends Component {
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

  // name="name" onChange={this.handleChange} <input type="number" placeholder="Receipt ID" name="receiptId" onChange={this.handleChange} />

  render() {
    return (
      <div className="dashboard row mt-5 p-3">
          <aside className="col-3 bd-highlight  ">
            <div className="col-10">
              <VscAccount className="p-2 mb-3 m-1" size="275px"/>
              <h3 className="text-center" >Username</h3>
              <h3>Email</h3>
            </div>
            <div  className="col-10 mt-3">
              <h3 className="text-center">Acoount Settings</h3> 
              <h3 className="text-center">Update Information</h3>
              <h3 className="text-center">Delete Sccount</h3>
            </div>
          </aside>
          <main className=" col-9 wm">
              <section className="  row bd-highlight p-2 bg-color rounded">
                <h2 className="p-1">Create a Template</h2>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid" />
                </div>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid" />
                </div>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid" />
                </div>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid" />
                </div>
              </section>
              <section className=" mt-5 row bd-highlight p-2 bg-color rounded">
                <h2 className="p-1">Your Resume Templates</h2>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid" />
                </div>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid" />
                </div>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid" />
                </div>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid" />
                </div>
              </section>
          </main>
      </div>
    );
  }
}

export default Dashboard;