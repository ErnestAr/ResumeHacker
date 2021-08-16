  
import React, { Component } from 'react';

import "./dashboard.css"
import { Route } from 'react-router-dom';
import Templates from "./Templates"
import ResumeForm from './ResumeForm';
import ResumeFormBlue from './ResumeFormBlue';

import UserInterface from './UserInterface';
import Account from './Account';


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard row mt-5 p-3">
        <UserInterface/>
        <Route exact path="/dashboard" component={Templates} />
        <Route exact path="/dashboard/resume" component={ResumeForm} />
        <Route exact path="/dashboard/resumeblue" component={ResumeFormBlue} />
        <Route exact path="/dashboard/updatedelete" component={Account} />
      </div>
    );
  }
}

export default Dashboard;