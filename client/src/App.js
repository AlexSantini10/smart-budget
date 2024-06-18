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
import CreateTransazione from './pages/CreateTransazione';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/transazioni" element={<ProtectedRoute><Transazioni /></ProtectedRoute>} />
        <Route path="/conti" element={<ProtectedRoute><Conti /></ProtectedRoute>} />
        <Route path="/categorie" element={<ProtectedRoute><Categorie /></ProtectedRoute>} />
        <Route path="/gestione-profilo" element={<ProtectedRoute><GestioneProfilo /></ProtectedRoute>} />

        <Route path="/crea-transazione" element={<ProtectedRoute><CreateTransazione /></ProtectedRoute>} />
      
        <Route path="/login" element={<Login />} />
        <Route index element={<Register />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

