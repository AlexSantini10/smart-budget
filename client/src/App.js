import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LandingPage, Login } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registrazione" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} /> {/* Redirect a registrazione di default */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

