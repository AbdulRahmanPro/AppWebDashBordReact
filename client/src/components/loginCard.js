import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEye } from '@fortawesome/free-solid-svg-icons'

export default function loginCard() {
  return (
    <section className="Section_login float-right">
      <div className="title mb-4 ">
        <h1 className="text-4xl mx-auto my-auto">Login</h1>
        <p>Glad you’re back.!</p>
      </div>
      <form className="form_inputs space-y-5 ">
        <input className="form_input" placeholder="Username" ></input>
        <input className="form_input" type='password' placeholder="Password"> </input>
      </form>
      <div className="box_but_login flex flex-col justify-center gap-5 mt-6  ">
        <button className="but_login" type={"submit"}>Login</button>
        <p className="text-center">Forgot password ?</p>
      </div>
      <div className="flex space-x-5 items-center justify-center mt-5" >
        <img src={require("./icon/devicon_google.png")} ></img>
        <img src={require("./icon/logos_facebook.png")} ></img>
        <img src={require("./icon/bi_github.png")} ></img>

      </div>
    </section>
  )
}
