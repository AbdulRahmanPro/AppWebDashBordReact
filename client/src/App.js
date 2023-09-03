import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageLogin from './Pagelogin';
import RegisterPage from './PageRegister';
import PageDashBord from './PageDashBord';
import message from './components/Popup/message_succeeded';
import "./css/dashbord.css"
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
          <Route path='/admin/dashbord' element={<PageDashBord></PageDashBord>}/>
        </Routes>
      </Router>
    </div>
  );
}
