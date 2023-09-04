import { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export default function AddUsers(props) {
    const [valueinputs , setvule] = useState({name:"",email:"",password:"",username:""})
    const ChangeVaule = (e)=>{
        const {name,value} = e.target
        setvule({...valueinputs,[name]:value})
    }
    const submit = ()=>{
        try{
            axios.post("http://localhost:3001/api/register",valueinputs)
            .then(()=>{
                console.log("susced")
            })
        }catch(error){
            console.log(error)
        }
    }
    console.log(valueinputs     )
    return (
        <div className="popup-overlay w-screen h-screen">
            <div className="popup-content size_popupEdit flex flex-col  rounded-xl bg-white">
            <form className=" grid grid-cols-2 grid-rows-2 justify-items-center h-full "  onSubmit={submit}>
                <div className="flex flex-col">
                    <label htmlFor="username">Username</label>
                    <input className="input_edit w-3/4 p-1" onChange={ChangeVaule} value={valueinputs.username} type="text" name="username" id="username"></input>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="username">name</label>
                    <input className="input_edit w-3/4 p-1" onChange={ChangeVaule} type="text" value={valueinputs.name} name="name" id="name"></input>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="username">email</label>
                    <input className="input_edit w-3/4 p-1" onChange={ChangeVaule} type="email" value={valueinputs.email} name="email" id="email"></input>
                </div>
                <div className="flex flex-col">
                        <label htmlFor="password">password</label>
                        <input className="input_edit w-3/4 p-1" onChange={ChangeVaule} type="password" value={valueinputs.password} name="password" id="password"></input>
                </div>
                <button className=" col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}