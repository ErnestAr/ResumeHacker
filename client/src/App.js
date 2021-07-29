import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

//IMPORT PAGES
import Home  from './pages/Home';
import About  from './pages/About';
import Dashboard from './pages/Dashboard/Dashboard';
import LoginSignUp  from './pages/LoginSignUp';






function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/LoginSignUp' component={LoginSignUp} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
