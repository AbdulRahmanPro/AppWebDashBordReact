import { useState } from "react";
import axios from "axios";

export default function Popup_editUser(props) {
    const [valueUsers, setvalueUsers] = useState({ email: "", username: "", name: "", password: "" });

    const handleChangeValue = (e) => {
        const { name, value } = e.target;
        setvalueUsers({ ...valueUsers, [name]: value });
    };

    const filterEmptyKeys = (obj) => {
        const filteredObj = { ...obj };
        for (const key in filteredObj) {
            if (filteredObj[key] === null || filteredObj[key] === undefined || filteredObj[key] === "") {
                delete filteredObj[key];
            }
        }
        return filteredObj;
    };

    const submit = () => {
        try {
            const filteredValueUsers = filterEmptyKeys(valueUsers); // تطبيق الفلترة
            console.log(filteredValueUsers)
            const id = props.id;
            axios.put(`http://localhost:3001/api/Edit/${id}`, filteredValueUsers) // إرسال القيم المصفاة
            .then(() => {
                    console.log("Data modification succeeded");
                });
        } catch (error) {
            console.log("error");
        }
    };

    console.log(valueUsers);

    return (
        <div className="popup-overlay w-screen h-screen">
            <div className="popup-content size_popupEdit flex flex-col  rounded-xl bg-white">
                <h1 className="text-2xl">Edit User</h1>
                <form className="grid grid-cols-2 justify-items-center " onSubmit={submit}>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="id" className="text-sm font-bold">ID:</label>
                        <p>{props.id}</p>
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="username" className="text-sm font-bold">Username:</label>
                        <input className="input_edit w-3/4 p-1" onChange={handleChangeValue} name="username" value={valueUsers.username} type="text" id="username" placeholder="Enter your username" />
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="email" className="text-sm font-bold">Email:</label>
                        <input className="input_edit w-3/4 p-1" type="text" onChange={handleChangeValue} name="email" value={valueUsers.email} id="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="name" className="text-sm font-bold">Name:</label>
                        <input className="input_edit w-3/4 p-1" type="text" onChange={handleChangeValue} name="name" value={valueUsers.name} id="name" placeholder="Enter your name" />
                    </div>
                    <div className="mb-4 flex flex-col justify-center items-center col-span-2 ">
                        <label htmlFor="password" className="text-sm font-bold">Password:</label>
                        <input className="input_edit  p-1" type="password" onChange={handleChangeValue} name="password" value={valueUsers.password} id="password" placeholder="Enter your password" />
                    </div>
                    <button className=" col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
