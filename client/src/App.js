import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Registrazione, Login} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registrazione" element={<Registrazione />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} /> {/* Redirect to login by default */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

