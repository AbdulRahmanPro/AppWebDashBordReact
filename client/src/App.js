import React from 'react';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Routes ,Navigate } from 'react-router-dom';
import PageLogin from './Pagelogin';
import RegisterPage from './PageRegister';
import PageDashBord from './PageDashBord';
import PrivateRoutes from './components/Protecte/ProtectedRoute';
import "./css/dashbord.css"
import './css/App.css';
import './css/login.css';
import './css/register.css'



export default function App() {
  const token = Cookies.get("jwt")
  return (
    <div className="h-screen-mix flex flex-row-reverse gap-14 justify-center items-center">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
              <Route path='/home'/>
          </Route>
          <Route path='/admin/dashbord' element={<PageDashBord></PageDashBord>}/>
          <Route path="/login" element={<PageLogin /> } />
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </Router>
    </div>
      //  <Route path="/login" element={<PageLogin /> } />
      //  <Route path="/register" element={<RegisterPage/>}/>
      //  <Route path='/admin/dashbord' element={<PageDashBord></PageDashBord>}/>
  );
}
