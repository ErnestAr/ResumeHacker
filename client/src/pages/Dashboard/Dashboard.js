  
import React, { Component } from 'react';

import "./dashboard.css"
import { Route } from 'react-router-dom';
import Templates from "../../components/Templates"
import ResumeForm from '../../components/ResumeForm';
import UserInterface from '../../components/UserInterface';


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard row mt-5 p-3">
        <UserInterface/>
        <Route exact path="/dashboard" component={Templates} />
        <Route exact path="/dashboard/resume" component={ResumeForm} />
      </div>
    );
  }
}

export default Dashboard;