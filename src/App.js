import React from "react"
import SignUp from "./components/SignUp"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import About from "./components/About"
// import UpdateProfile from "./UpdateProfile"
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
        <Router>
          <AuthProvider>
            <Navbar />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/about" component={About} />
              <Route path="/" component={Home} />
            </Switch>
          </AuthProvider>
        </Router>
        </>
  )
}

export default App