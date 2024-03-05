// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import AllCourses from './AllCourses';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><NavLink exact to="/">All</NavLink></li>
            <li><NavLink to="/fullstack">Full Stack Development</NavLink></li>
            <li><NavLink to="/datascience">Data Science</NavLink></li>
            <li><NavLink to="/cybersecurity">Cyber Security</NavLink></li>
            <li><NavLink to="/career">Career</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={AllCourses} />
          <Route path="/fullstack" component={FullStackDevelopment} />
          <Route path="/datascience" component={DataScience} />
          <Route path="/cybersecurity" component={CyberSecurity} />
          <Route path="/career" component={Career} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
