import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';
import AdminPanel from './Pages/AdminPanel/adminPanel';


function App() {
  return (
    <div className="App">

      <AdminPanel/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
