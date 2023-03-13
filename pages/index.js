import React, { useState } from "react";

import prisma from "../prisma/prisma";
import styles from "../styles/index.module.css";
import { useSelector } from "react-redux";

function Index(props) {
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const [users, setusers] = useState(props.users);

  const [isSorted, setisSorted] = useState(false);
  const [isSearched, setisSearched] = useState(false);
  const [isCardView, setisCardView] = useState(true);
  const [sortedUBN, setsortedUBN] = useState({});
  const [sortedUBA, setsortedUBA] = useState({});
  const [searchedPeople, setsearchedPeople] = useState({});
  const [serachV, setserachV] = useState("");
  const [isSortedBN, setisSortedBN] = useState(false);
  const [isSortedBA, setisSortedBA] = useState(false);


  function sortByName() {
    // console.log(users, "us");
    const sortedUsers = users.sort((a, b) => {
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
    setsortedUBN(sortedUsers);
    setisSorted(true);
    setisSearched(false)
    setisSortedBN(true);
    setisSortedBA(false);
    // setusers(sortedUsers);
    console.log(sortedUsers, sortedUBN, "srt");
  }

  function sortByAge() {
    // console.log(users ,"us")
    const sortedUsers = users.sort((a, b) => {
      const ageA = a.age;
      const ageB = b.age;
      if (ageA < ageB) {
        return -1;
      }
      if (ageA > ageB) {
        return 1;
      }

      return 0;
    });
    setsortedUBA(sortedUsers);
    setisSorted(true);
    setisSearched(false)
    setisSortedBA(true);
    setisSortedBN(false);
    // setusers(sortedUsers);
    console.log(sortedUsers, users, "srt");
  }

  function search(e) {
    setserachV(e.target.value);
    console.log(serachV);
    const persons = users.find((person) => person.name === serachV);
    setsearchedPeople(persons);
    if (persons) {
      setisSearched(true);
      // setisSorted(false);
    } else {
      setisSearched(false);
      // setisSorted(false);
    }

    console.log(searchedPeople, isSearched, "sePeople");
  }

  return (
    <>
      <div className={styles.container}>
        {!isAuth && <h3>Login to see details...</h3>}
        {isAuth && isCardView && (
          <button
            onClick={() => {
              setisCardView(false);
              setisSorted(false);
              setisSearched(false)
            }}
          >
            Show Table View
          </button>
        )}
        {isAuth && !isCardView && (
          <button
            onClick={() => {
              setisCardView(true);
              setisSorted(false);
              setisSearched(false)

            }}
          >
            Show Card View
          </button>
        )}
        {isAuth && isCardView && (
          <>
            <button onClick={sortByAge}>Sort By Age</button>
            <button onClick={sortByName}>Sort By Name</button>
            <input
              type="text"
              placeholder="search"
              value={serachV}
              onChange={search}
            ></input>
          </>
        )}
        {isSearched && (
          <>
            <div className={styles.userCard}>
              <h3>{searchedPeople.name}</h3>
              <h3>{searchedPeople.occupation}</h3>
              <h3>{searchedPeople.age}</h3>
            </div>
          </>
        )}

        {/* //for sorted user by name */}
        {isAuth &&
          isSorted &&
          !isSearched &&
          isSortedBN &&
          // props.
          sortedUBN.map((c) => {
            return (
              <>
                <div 
                className={styles.userCard}>
                  <h3>{c.name}</h3>
                  <h3>{c.occupation}</h3>
                  <h3>{c.age} years</h3>
                </div>
              </>
            );
          })}

        {/* //for sorted user by age */}
        {isAuth &&
          isSorted &&
          !isSearched &&
          isSortedBA &&
          // props.
          sortedUBA.map((c) => {
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

        {/* //for card view */}

        {isAuth &&
          isCardView &&
          !isSorted &&
          !isSearched &&
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

        {/* //for table view */}
        {isAuth && 
        !isCardView && 
        !isSearched &&
        (
          <>
            <div className={styles.tableViewH}>
              <tr>
                <td>Name</td>
                <td>Occupation</td>
                <td>Age</td>
              </tr>
              <br />
            </div>
          </>
        )}
        {isAuth &&
          !isCardView &&
          !isSearched &&
          // props.
          users.map((c) => {
            return (
              <>
                <div className={styles.tableView}>
                  {/* <table> */}
                  <tr>
                    <td>{c.name}</td>
                    <td>{c.occupation}</td>
                    <td>{c.age} </td>
                  </tr>
                  {/* </table> */}
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Index;

export async function getStaticProps() {
  await prisma.$connect();
  const users = await prisma.user.findMany();
console.log("all users",users)
  return {
    props: { users },
    revalidate: 10,
  };
}
