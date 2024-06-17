import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {
  Categorie,
  Conti,
  GestioneProfilo,
  Home,
  Login,
  Register,
  Transazioni,
  Error
} from './pages';
import ProtectedRoute from './pages/ProtectedRoute';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute></ProtectedRoute>}>
          <Route path="/home" element={<Home />} />
          <Route path="/transazioni" element={<Transazioni />} />
          <Route path="/conti" element={<Conti />} />
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/gestione-profilo" element={<GestioneProfilo />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

