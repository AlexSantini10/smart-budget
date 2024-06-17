import React from 'react'
import { PrimaryButton } from '../components'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const LogoutButton = () => {

    const navigate = useNavigate();
    const {logoutUser} = useAppContext();

    const handleLogout = () => {
        logoutUser();
        navigate('/login');
    }

  return (
    <PrimaryButton labelText="Logout" onClick={handleLogout} />
  )
}

export default LogoutButton