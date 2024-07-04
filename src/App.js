import React from 'react';

import SurveyIndex from './components/SurveyIndex';
import SurveyForm from './components/SurveyForm';
import SurveyFormEdit from './components/SurveyFormEdit';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<SurveyIndex />} />
          <Route path="/create-survey" element={<SurveyForm />} />
          <Route path="/edit-survey/:id" element={<SurveyFormEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;