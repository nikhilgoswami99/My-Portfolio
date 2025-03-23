import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function toggleMenu() {
    setIsActive(!isActive);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <Link className={styles.navbar_icon} to={"/"}>
            NG
          </Link>
        </div>

        <ul className={`${styles.navbar_links} ${isActive ? styles.show_navbar_links : ""}`}>
          <li>
            <Link className={styles.links} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.links} to={"about"}>
              About
            </Link>
          </li>
          <li>
            <Link className={styles.links} to={"projects"}>
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles.links} to={"resume"}>
              Resume
            </Link>
          </li>
        </ul>

        {isActive ? (
          <CgClose onClick={toggleMenu} className={styles.close} />
        ) : (
          <GiHamburgerMenu onClick={toggleMenu} className={styles.hamburger} />
        )}
      </nav>
    </>
  );
}

export default Navbar;