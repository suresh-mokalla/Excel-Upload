import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExcelUpload from './components/ExcelUpload';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1>Media Upload</h1>
        <p>Add your documents here, and you can upload up to 1 file max</p>
        <Routes>
          <Route path="/excel-upload" element={<ExcelUpload />} />
          <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;