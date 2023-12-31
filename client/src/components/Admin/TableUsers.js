import { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import AddUsers from "../Popup/addUsers";
import Popup_editUser from "../Popup/popup_editUser";
import { useTable } from "react-table";
import axios from "axios"

export default function SimpleTable(props) {
    const [isVisible, setisVisible] = useState(false)
    const [isVisibleAddUsers, setisVisibleAddUsers] = useState(false)
    const [id, setid] = useState("")
    const handleVisible = (e) => {
        const _id = e.target.closest('tr').getAttribute('id');
        setisVisible(!isVisible)
        setid(_id)
    }
    const handlisVisibleAddUsers = (e) => {
        setisVisibleAddUsers(!isVisible)
    }

    const [Account, setAccount] = useState([]); // انتبه إلى الاستخدام الصحيح للدوال useState
    useEffect(() => {
        axios("http://localhost:3001/api/Accounts")
            .then((response) => {
                if (Array.isArray(response.data.AccountUser)) {
                    // تحويل البيانات إلى مصفوفة إذا كانت صالحة
                    setAccount(response.data.AccountUser);
                } else {
                    console.error("البيانات غير صالحة: ", response.data.AccountUser);
                }
            })
            .catch((error) => {
                console.error("حدث خطأ أثناء استدعاء البيانات:", error);
            });
    }, []);
    const handleDelete = async (e) => {
        const _id = e.target.closest('tr').getAttribute('id');
        try {
            await axios.delete(`http://localhost:3001/api/Delete/${_id}`);
            // إزالة العنصر المحذوف من القائمة Account
            setAccount((prevAccount) => prevAccount.filter(user => user._id !== _id));
        } catch (error) {
            console.error("حدث خطأ أثناء الحذف:", error);
        }
    }
    return (
        <div className="table">
            {isVisibleAddUsers && <AddUsers />}
            <div className="flex flex-row justify-between">
                <h2 className="text-left text-2xl p-4">List Users</h2>
                <div className="text-right p-4">
                    <FontAwesomeIcon className="text-3xl" onClick={handlisVisibleAddUsers} icon={faPlus} />
                </div>
            </div>
            <table className="table_desing">
                <thead className="thead_desing">
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th className="expend">Actions</th>
                        {/* يمكنك إضافة المزيد من الأعمدة هنا حسب الحاجة */}
                    </tr>
                </thead>
                <tbody className="tbody_desing">
                    {Account.map((user) => (
                        <tr key={user._id} id={user._id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td className="expend">
                                <span className="icons ">
                                    <FontAwesomeIcon onClick={handleDelete} className=" text-red-600" icon={faTrash} />
                                    <FontAwesomeIcon onClick={handleVisible} className=" text-green-600" icon={faPenToSquare} />
                                </span>
                            </td>
                            {isVisible && <Popup_editUser id={id} />}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}



