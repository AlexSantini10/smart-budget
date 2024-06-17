import React, { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import { Navigate } from 'react-router-dom';
import {Loading} from '../components';
import Cookies from 'js-cookie';

const ProtectedRoute = ({children}) => {
    const {user, userLoading, getCurrentUser} = useAppContext() || {};

    useEffect(() => {
        getCurrentUser();
    }, []);

    if (!user) {
        return <Navigate to="/" />
    } else {
        return children;
    }
}

export default ProtectedRoute