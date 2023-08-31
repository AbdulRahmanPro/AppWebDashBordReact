import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageLogin from './Pagelogin';
import RegisterPage from './PageRegister';
import './css/App.css';
import './css/login.css';
import './css/register.css'



export default function App() {
  return (
    <div className="h-screen-mix flex flex-row-reverse gap-14 justify-center items-center">
      <Router>
        <Routes>
          <Route path="/login" element={<PageLogin /> } />
          <Route path="/register" element={<RegisterPage/>}/>

        </Routes>
      </Router>
    </div>
  );
}
