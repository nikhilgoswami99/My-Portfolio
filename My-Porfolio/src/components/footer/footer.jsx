import styles from "./footer.module.css";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.developer}>
          Designed and Developed by Nikhil Goswami
        </div>
        <div className={styles.copyright}>Copyright <span className={styles.copy_right}>©</span> 2025 NG</div>
          <ul className={styles.socialLinks}>
            <li className={styles.socialIcons}>
              <a
                href="https://github.com/nikhilgoswami99"
                target="_blank"
                rel="noreferrer"
                className={`${styles.iconColour} ${styles.homeSocialIcons}`}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a
                href="/"
                target="_parent"
                rel="noreferrer"
                className={`${styles.iconColour} ${styles.homeSocialIcons}`}
              >
                <BsTwitterX />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a
                href="https://www.linkedin.com/in/nikhil-goswami-067547214/"
                target="_blank"
                rel="noreferrer"
                className={`${styles.iconColour} ${styles.homeSocialIcons}`}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a
                href="/"
                target="_top"
                rel="noreferrer"
                className={`${styles.iconColour} ${styles.homeSocialIcons}`}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
      </footer>
    </>
  );
}

export default Footer;
