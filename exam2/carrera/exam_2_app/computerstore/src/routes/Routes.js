import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Principal from '../pages/principal';


function App() {
  
  return (
    <Router>
      <Routes>
       
        <Route exact path='/' element={<Principal/>}/> 
        
      </Routes>
    </Router>
  );
}

export default App;
