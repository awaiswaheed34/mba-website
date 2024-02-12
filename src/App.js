// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Homepage';
import MyForm from './Form';
import MbaGraduates from './MbaGraduates';

const App = () => {
  return (
    <Router>
        <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/essayBank" element={<MyForm />} />
        <Route path="/mbaGraduates" element={<MbaGraduates />} />

        </Routes>
      
    </Router>
  );
};

export default App;
