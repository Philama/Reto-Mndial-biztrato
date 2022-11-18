import { Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../actions/AuthAction'
import { AuthContext } from '../context/authContext'

const Home = () => {
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogout = () => {
      dispatch(logout())
      navigate('/login')
  }

  return (
    <div>Home
      <Button variant="outline" type="submit" fontSize="20px" marginLeft="20px" onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Home