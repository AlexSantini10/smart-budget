import React, { useEffect } from 'react'
import { LogoutButton } from '../widgets'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();

  useEffect(() => {
    document.title = 'Home'

    if (!user){
      navigate('/login')
    }
  }, [])


  return (
    <div>
      <LogoutButton />
      <h1>Home</h1>
    </div>
  )
}

export default Home