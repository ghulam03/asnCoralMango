import React, { useState } from "react";

import prisma from "../prisma/prisma";
import styles from "../styles/index.module.css";

function Index(props) {
  console.log(props);
  const [isCardView, setisCardView] = useState(true);
  return (
    <>
      {isCardView && (
        <button onClick={() => setisCardView(false)}>Show Table View</button>
      )}

      {!isCardView && (
        <button onClick={() => setisCardView(true)}>Show Card View</button>
      )}

      {isCardView &&
        props.users.map((c) => {
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
      {!isCardView && (
        <>
          <tr>
            <td>Name</td>
            <td>Occupation</td>
            <td>Age</td>
          </tr>
          <br />
        </>
      )}
      {!isCardView &&
        props.users.map((c) => {
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
                {/* <h3>{c.name}</h3>
                <h3>{c.occupation}</h3>
                <h3>{c.age} years</h3> */}
              </div>
            </>
          );
        })}
    </>
  );
}
// if(showCardView){

// {props.users.map((c)=>{
//         return (
//             <><div className={styles.userCard}>

//             <h3>{c.name}</h3>
//             <h3>{c.occupation}</h3>
//             <h3>{c.age} years</h3>
//             </div>

//             </>
//         )
//     })

// }
// {
  /* <h1>Index</h1>
    <label className={styles.toogle}>
  <input type="checkbox"/>
  <span className={styles.slider}></span>
</label> */
// }
// </>
// )
// }

export default Index;

export async function getStaticProps() {
  await prisma.$connect();
  const users = await prisma.user.findMany();

  return {
    props: { users },
    revalidate: 10,
  };
}
