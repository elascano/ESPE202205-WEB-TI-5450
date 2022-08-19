import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CreateUser from './components/createCustomer'

import './App.css';
import { createCustomer } from '../backend/src/controllers/Customer.controllers';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/user" component={createCustomer} />
      </div>
    </Router>
  );
}

export default App;