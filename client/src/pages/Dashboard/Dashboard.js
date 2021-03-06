  
import React, { Component } from 'react';

import "./dashboard.css"
import { Route } from 'react-router-dom';
import Templates from "../../components/Templates"
import ResumeForm from '../../components/ResumeForm';
import ResumeFormBlue from '../../components/ResumeFormBlue';

import UserInterface from '../../components/UserInterface';
import Account from '../../components/Account';


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