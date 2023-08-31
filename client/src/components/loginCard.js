import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function LoginCard() {
  const [valueform,setvalueform] = useState({email:"",password:""})
  const handleSubmit = (e)=>{
    const {name , value} =  e.target
    setvalueform({...valueform,[name]:value})
  }
  const Submit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/api/login', valueform)
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
};
  return (
    <div className='background_login w-screen h-screen '>
      <div className='flex flex-row-reverse justify-between items-center container'>
      <section className="Section_login float-right">
        <div className="title mb-4">
          <h1 className="text-4xl mx-auto my-auto">Login</h1>
          <p>Glad you’re back.!</p>
        </div>
        <form className="form_inputs space-y-5">
          <input className="form_input" name='email' placeholder="Email" />
          <input className="form_input" name="password" type="password" placeholder="Password" />
        </form>
        <div className="box_but_login flex flex-col justify-center gap-5 mt-6">
          <button className="but_login" type="submit">
            Login
          </button>
          <p className="text-center">Forgot password ?</p>
        </div>
        <div className="flex space-x-5 items-center justify-center mt-5" onSubmit={Submit}>
          <img src={require("./icon/devicon_google.png")} alt="Google" />
          <img src={require("./icon/logos_facebook.png")} alt="Facebook" />
          <img src={require("./icon/bi_github.png")} alt="GitHub" />
        </div>

        <Link to="/register" className=' text-center mt-10'>Don’t have an account ? Signup</Link>
      </section>
      <div>
        <h1 className="text-8xl text-center">
          Welcome Back .!
        </h1>
      </div>
      </div>
    </div>
  );
}
