import React from "react"
import SignUp from "./components/SignUp"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import About from "./components/About"
// import UpdateProfile from "./UpdateProfile"
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumeForm from "./components/ResumeForm"
import ResumeFormBlue from "./components/ResumeFormBlue"
import UpdateUser from "./components/UpdateUser"
import NavbarChange from "./components/NavbarChange"


function App() {
  return (
    <>
        <Router>
          <AuthProvider>
            <NavbarChange />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/account" component={UpdateUser} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/about" component={About} />
              <Route path="/resumedev" component={ResumeForm} />
              <Route exact path="/resumejunior" component={ResumeFormBlue} />
              <Route path="/updateuser" component={UpdateUser} />
            </Switch>
          </AuthProvider>
        </Router>
        </>
  )
}

export default App