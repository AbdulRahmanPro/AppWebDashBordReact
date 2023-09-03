import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Messagesucceeded from '../Popup/message_succeeded';
import MessageFailed from '../Popup/message_failed';
import axios from 'axios';
import Cookies from 'js-cookie';


export default function LoginCard() {
  const [valueform, setvalueform] = useState({ email: "", password: "" })
  const [isVisibleSucceeded , setisVisibleSucceeded] = useState(false)
  const [isVisibleFiled , setisVisibleFiled ] = useState(false)
  const  handleVisibleSucceeded = ()=>{
    setisVisibleSucceeded(!isVisibleSucceeded)
  }
  const handleVisibleFiled = ()=>{
    setisVisibleFiled(!isVisibleFiled)
  }
  const handleSubmit = (e) => {
    const { name, value } = e.target
    setvalueform({ ...valueform, [name]: value })
  }
  const Submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/login', valueform)
      .then((res) => {
        console.log(res.data);
        const token = res.data.token;
        handleVisibleSucceeded()
        // Set the token in a cookie
        Cookies.set('jwt', token, { expires: 1, path: '/' }); // Replace '1' with the desired expiration time in days
      })
      .catch((error) => {
        handleVisibleFiled()
        console.log(error);
      });
  };
  return (
    <div className=' w-screen h-screen  '>
      <div className='flex flex-row-reverse justify-between items-center container  '>
        <section className="Section_login float-right">
          <div className="title mb-4">
            <h1 className="text-4xl mx-auto my-auto">Login</h1>
            <p>Glad you’re back.!</p>
          </div>
          <form className="form_inputs space-y-5" onSubmit={Submit}>
            <input className="form_input" value={valueform.email} onChange={handleSubmit} name='email' placeholder="Email" />
            <input className="form_input" value={valueform.password} onChange={handleSubmit} name="password" type="password" placeholder="Password" />
            <div className="box_but_login flex flex-col justify-center gap-5 mt-6">
              <button className="but_login" type="submit">
                Login
              </button>
              <p className="text-center">Forgot password ?</p>
            </div>
          </form>

          <div className="flex space-x-5 items-center justify-center mt-5" onSubmit={Submit}>
            <img src={require("../icon/devicon_google.png")} alt="Google" />
            <img src={require("../icon/logos_facebook.png")} alt="Facebook" />
            <img src={require("../icon/bi_github.png")} alt="GitHub" />
          </div>
          <Link to="/register" className=' text-center mt-10'>Don’t have an account ? Signup</Link>
        </section>
        <div>
          <h1 className="text-8xl text-center">
            Welcome Back .!
          </h1>
        </div>
      </div>
          {
            isVisibleSucceeded &&  <Messagesucceeded/>
          }
          {
            isVisibleFiled && <MessageFailed/>
          }
          
    </div>
  );
}
