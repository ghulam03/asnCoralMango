import React, { useState } from "react";

import prisma from "../prisma/prisma";
import styles from "../styles/index.module.css";
import { useSelector } from "react-redux";

function Index(props) {
  const [users, setusers] = useState(props.users);
  function sortByName(){
    console.log(users ,"us")
    const sortedUsers=
    // users.sort()
    users.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
    console.log(sortedUsers ,"srt")
    setusers(sortedUsers)
  }

  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const [isCardView, setisCardView] = useState(true);

  console.log(props);
  return (
    <>
      {!isAuth && <h3>Login to see details...</h3>}
      {isAuth && isCardView && (
        <button onClick={() => setisCardView(false)}>Show Table View</button>
      )}
      {isAuth && !isCardView && (
        <button onClick={() => setisCardView(true)}>Show Card View</button>
      )}
      {/* {isAuth && (<button>Sort By Name</button>)}
        {isAuth && (<button>Sort By Age</button>)} */}
      {isAuth && (
        <>
          <button>Sort By Age</button>
          <button onClick={sortByName}>Sort By Name</button>
        </>
      )}
      //for card view
      {isAuth &&
        isCardView &&
        // props.
        users.map((c) => {
          return (
            <>
              <div className={styles.userCard}>
                <h3>{c.name}</h3>
                <h3>{c.occupation}</h3>
                <h3>{c.age} years</h3>
              </div>
            </>
          );
        })}
      //for table view
      {isAuth && !isCardView && (
        <>
          <tr>
            <td>Name</td>
            <td>Occupation</td>
            <td>Age</td>
          </tr>
          <br />
        </>
      )}
      {isAuth &&
        !isCardView &&
        // props.
        users.map((c) => {
          return (
            <>
              <div className={styles.userCard}>
                <table>
                  {/* <tr>
                    <td>Name</td>
                    <td>Occupation</td> <td>Age</td>
                  </tr> */}
                  <tr>
                    <td>{c.name}</td>
                    <td>{c.occupation}</td> <td>{c.age} </td>
                  </tr>
                </table>
              </div>
            </>
          );
        })}
    </>
  );
}

export default Index;

export async function getStaticProps() {
  await prisma.$connect();
  const users = await prisma.user.findMany();

  return {
    props: { users },
    revalidate: 10,
  };
}
