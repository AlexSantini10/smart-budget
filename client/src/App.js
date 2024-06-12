import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LandingPage, Login, ProveJem, HomePage } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registrazione" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/provejem" element={<ProveJem />} />
        <Route path="/" element={<LandingPage />} /> {/* Redirect a registrazione di default */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

