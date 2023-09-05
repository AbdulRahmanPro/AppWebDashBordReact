import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from "axios"

const PrivateRoutes = () => {
    const [isPermitted, setIsPermitted] = useState(null);
    useEffect(() => {
        const checkSession = async () => {
            try {
                const token = Cookies.get("jwt");
                const requestOptions = {
                    method: "get",
                    url: "http://localhost:3001/api/protection",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                };
                if (token) {
                    const response = await axios(requestOptions);
                    console.log(response.data);
                    setIsPermitted(response.data.permit);
                } else {
                    setIsPermitted(false);
                }
            } catch (error) {
                console.error(error);
            }
        };
        checkSession();
    }, []);

    if (isPermitted === null) {
        // لا تعرض شيئًا أثناء انتظار البيانات
        return null;
    }

    return isPermitted ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoutes;
