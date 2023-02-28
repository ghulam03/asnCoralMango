import { useDispatch, useSelector } from 'react-redux'

import Link from 'next/link'
import React from 'react'
import { deleteUser } from '../store/userSlice'
import { useRouter } from 'next/router'

function Header() {
    const dispatch=useDispatch()
    const router=useRouter()

    const isAuth=useSelector((state)=>state.user.isAuthenticated)
  return (
    <>
    {isAuth && (
        <button onClick={()=>{
            dispatch(deleteUser())
            router.push('/')
        }}>Logout</button>

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