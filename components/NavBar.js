import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
function NavBar() {
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <Link href="/">
            <h2>Home</h2>
          </Link>
        </ul>
        <ul>
          <Link href="/plant">
            <h2>About Plant</h2>
          </Link>
        </ul>
        <ul>
          <Link href="/animal">
            <h2>About Animal</h2>
          </Link>
        </ul>
        <ul>
          <Link href="/about-us">
            <h2>About Us</h2>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
