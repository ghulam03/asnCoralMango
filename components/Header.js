import { useDispatch, useSelector } from 'react-redux'

import Link from 'next/link'
import React from 'react'
import { deleteUser } from '../store/userSlice'

function Header() {
    const dispatch=useDispatch()

    const isAuth=useSelector((state)=>state.user.isAuthenticated)
  return (
    <>
    {isAuth && (
        <button onClick={()=>dispatch(deleteUser())}>Logout</button>

    )}
    {!isAuth && (
    <Link href="/login">
    <button>Login</button>
    </Link>

    )}
    
    </>
  )
}

export default Header