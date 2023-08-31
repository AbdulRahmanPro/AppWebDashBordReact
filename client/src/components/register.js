import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function register(props) {
    return (
        <div className="background_register w-screen h-screen  "   >
            <div className='container flex flex-row-reverse justify-between items-center '>
            <section className="Section_register float-right">
                <div className="title mb-4">
                    <h1 className="text-4xl mx-auto my-auto">Signup</h1>
                    <p>Just some details to get you in.!</p>
                </div>
                <form className="form_inputs space-y-5">
                    <input className="form_input" placeholder="Username" />
                    <input className="form_input" placeholder="Email" />
                    <input className="form_input" type="password" placeholder="Password" />
                    <input className="form_input" type="password" placeholder="Confirm Password" />
                </form>
                <div className="box_but_login flex flex-col justify-center gap-5 mt-6">
                    <button className="but_singup" type="submit">
                        Signup
                    </button>
                </div>
                <div className="flex space-x-5 items-center justify-center mt-5">
                    <img src={require("./icon/devicon_google.png")} alt="Google" />
                    <img src={require("./icon/logos_facebook.png")} alt="Facebook" />
                    <img src={require("./icon/bi_github.png")} alt="GitHub" />
                </div>
                <Link to="/login" className=' text-center mt-10'>Already Registered? Login </Link>
            </section>
            <div >
                <h1 className=" text-8xl text-center  ">Roll the Carpet.!</h1>
            </div>
            </div>
        </div>

    )
}