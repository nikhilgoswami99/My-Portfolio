import styles from "./navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(true);

  function openLinks() {

    setIsActive(false);
  }

  function closeLinks() {
    setIsActive(true);
  }

  function NavLinks() {
    return (
      <ul className={isActive? styles.navbar_links : styles.show_navbar_links}>
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
    );
  }

  function MenuButton(props) {
    if (props.isActive) {
      return (
        <GiHamburgerMenu onClick={openLinks} className={styles.hamburger} />
      );
    } else {
      return <CgClose onClick={closeLinks} className={styles.close} />;
    }
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <Link className={styles.navbar_icon} to={"/"}>
            NG
          </Link>
        </div>

        <NavLinks></NavLinks>

        <MenuButton isActive={isActive}></MenuButton>
      </nav>
    </>
  );
}

export default Navbar;
