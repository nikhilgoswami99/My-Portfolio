import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { TbHome } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { TbFileCv } from "react-icons/tb";
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
              <div id={styles.home} className={styles.linkIcons}>
              <TbHome />
              Home
              </div>
            </Link>
          </li>
          <li>
            <Link className={styles.links} to={"about"}>
              <div className={styles.linkIcons}>
              <FaRegUser />
              About
              </div>
            </Link>
          </li>
          <li>
            <Link className={styles.links} to={"projects"}>
              <div id={styles.projects} className={styles.linkIcons}>
              <GrProjects />
              Projects
              </div>
            </Link>
          </li>
          <li>
            <Link className={styles.links} to={"resume"}>
            <div id={styles.resume} className={styles.linkIcons}>
            <TbFileCv />
            Resume
            </div>
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