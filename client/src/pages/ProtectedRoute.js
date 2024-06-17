import React from 'react'
import { useAppContext } from '../context/appContext'
import { Navigate } from 'react-router-dom';
import {Loading} from '../components';

const ProtectedRoute = ({children}) => {
    const {user, userLoading} = useAppContext() || {};

    if (userLoading) return <Loading />

    if (!user) {
        return <Navigate to="/register" />
    } else {
        return children;
    }
}

export default ProtectedRoute