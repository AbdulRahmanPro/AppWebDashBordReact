import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';


export default function Register(props) {
    const [valueform, setvalueform] = useState({ email: '', username: '', password: '', name: '' });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setvalueform({ ...valueform, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/register', valueform)
            .then((res) => {
                console.log(res.data);
                const token = res.data.token ; 

                // Set the token in a cookie
                Cookies.set('jwt', token, { expires: 1, path: '/' }); // Replace '1' with the desired expiration time in days
              
            })
            .catch((error) => {
                console.log(error); 
            });
    };

    return (
        <div className="background_register w-screen h-screen">
            <div className='container flex flex-row-reverse justify-between items-center'>
                <section className="Section_register float-right">
                    <div className="title mb-4">
                        <h1 className="text-4xl mx-auto my-auto">Signup</h1>
                        <p>Just some details to get you in.!</p>
                    </div>
                    <form className="form_inputs space-y-5" onSubmit={handleSubmit}>
                        <input className="form_input" onChange={handleInput} value={valueform.name} name='name' type="text" placeholder="Name" />
                        <input className="form_input" onChange={handleInput} value={valueform.username} name='username' placeholder="Username" />
                        <input className="form_input" onChange={handleInput} value={valueform.email} name='email' placeholder="Email" />
                        <input className="form_input" onChange={handleInput} value={valueform.password} name='password' type="password" placeholder="Password" />
                        <div className="box_but_login flex flex-col justify-center gap-5 mt-6">
                            <button className="but_singup" type="submit">
                                Signup
                            </button>
                        </div>
                    </form>
                    <div className="flex space-x-5 items-center justify-center mt-5">
                        <img src={require("../icon/devicon_google.png")} alt="Google" />
                        <img src={require("../icon/logos_facebook.png")} alt="Facebook" />
                        <img src={require("../icon/bi_github.png")} alt="GitHub" />
                    </div>
                    <Link to="/login" className=' text-center mt-10'>Already Registered? Login</Link>
                </section>
                <div>
                    <h1 className="text-8xl text-center">Roll the Carpet.!</h1>
                </div>
            </div>
        </div>
    );
}
