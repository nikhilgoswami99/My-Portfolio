import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <Link className={styles.navbar_icon} to={"home"}>NG</Link>
        </div>
        <ul className={styles.navbar_links}>
          <li>
            <Link className={styles.links} to={"home"}>
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
      </nav>
    </>
  );
}

export default Navbar;
