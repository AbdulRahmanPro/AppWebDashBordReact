import { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useTable } from "react-table";
import axios from "axios"

export default function SimpleTable(props) {

    const [Account, setAccount] = useState([]); // انتبه إلى الاستخدام الصحيح للدوال useState

    useEffect(() => {
        axios("http://localhost:3001/api/Accounts")
            .then((response) => {
                setAccount(response.data.Account); // قم بتعيين البيانات الجديدة باستخدام setAccount
            })
            .catch((error) => {
                console.error("حدث خطأ أثناء استدعاء البيانات:", error);
            });
    }, []); // أضف مصفوفة فارغة كمراقب للتأثير الثانوي لتنفيذه مرة واحدة عند تحميل المكون

    console.log(Account);

    return (
        <div className="table">
            <table className="table_desing">
            <caption className=' text-left  text-2xl p-2'>List Users</caption> {/* إضافة العنوان هنا */}
                <thead className="thead_desing">
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th >Actions</th>
                        {/* يمكنك إضافة المزيد من الأعمدة هنا حسب الحاجة */}
                    </tr>
                </thead>
                <tbody className="tbody_desing">
                    {Account.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td className="expend">
                                <span className="icons">
                                    <FontAwesomeIcon icon={faTrash} />
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </span>
                            </td>
                            {/* يمكنك إضافة المزيد من البيانات هنا حسب الحاجة */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
