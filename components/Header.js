import { useDispatch, useSelector } from 'react-redux'

import Link from 'next/link'
import React from 'react'
import { deleteUser } from '../store/userSlice'
import styles from "./header.module.css"
import { useRouter } from 'next/router'

function Header() {
    const dispatch=useDispatch()
    const router=useRouter()

    const isAuth=useSelector((state)=>state.user.isAuthenticated)
  return (
    <>
    <div  className={styles.container}>
        
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
</div>
    
    </>
  )
}

export default Header