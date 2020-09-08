import React from 'react';
import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
function App() {
  return (
    <div className="container mt-5">
      <Router>
        <Switch>
        <Route path="/"  exact component={ListEmployeeComponent}></Route>
      <Route path="/employees" component={ListEmployeeComponent}></Route>
      <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
