import React, { useState } from "react";

import { addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

function Login() {
    useState
    const [loginFB, setloginFB] = useState("")
    const dispatch=useDispatch()
    const router =useRouter()
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  // async
  function handleSubmit(e) {
    
    e.preventDefault();

    //    const response =await
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    })
      .then((data) => data.json())
      .then((datta) => {
        console.log(datta);
        if(datta.isAuthenticated){
            console.log("logged in")
            router.push('/')
            dispatch(addUser())
            
        }
        else{
            console.log("Invalid Credential")
            setloginFB('Invalid Credential')
        }
      });

    // const data=response.json()
    // console.log(data)
  }
  return (
    <>
      <div>
        <h2
        // className={styles.title}
        >
          Login Here!
        </h2>
        <form
          // className={styles.formcontainer}
          onSubmit={handleSubmit}
        >
          <label>User Name</label>
          <input
            type="text"
            placeholder="Enter Email"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          ></input>
          <label>Password</label>

          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setpassword(e.target.value)}
          ></input>
          <button>Login</button>
          <p>{loginFB}</p>
        </form>
      </div>
    </>
  );
}

export default Login;
