import styles from "./about.module.css";
import about_img from "../../assets/about_img.png";

import { DiJavascript1, DiReact, DiGit, DiJava } from "react-icons/di";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import { FaHtml5, FaCss3 } from "react-icons/fa";

function About() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.about_me}>
          <div className={styles.about_text}>
            <h1 className={styles.about_heading}>About Me</h1>
            <p className={styles.about_para}>
              Hello, I’m <span className="voilet_text">Nikhil Goswami</span>, a
              Software Developer. I have a strong academic foundation with a
              B.Tech in{" "}
              <span className="voilet_text">
                Computer Science and Engineering
              </span>{" "}
              from PSIT, Kanpur.
            </p>
            <div className={styles.about_para}>
              <p>My technical expertise includes:</p>
              <br />
              <p>
                1. Proficiency in programming languages such as{" "}
                <span className="voilet_text">Java, JavaScript</span>.
              </p>
              <br />
              <p>
                2. Experience with modern web development library/frameworks
                like <span className="voilet_text">React.js</span>.
              </p>
              <br />
              <p>
                3. Knowledge of{" "}
                <span className="voilet_text">
                  Data Structures and Algorithms
                </span>
                , Hands-on experience in developing scalable and efficient
                software solutions.
              </p>
            </div>
            <p className={styles.about_para}>
              I am committed to leveraging my skills to create innovative and
              impactful technologies.
            </p>
          </div>
          <img className={styles.about_img} src={about_img} alt="" />
        </div>

        <div className={styles.skills_container}>
          <h1 className={styles.skills_heading}>
            Professional <span className="voilet_text">Skillset</span>
          </h1>
          <div className={styles.all_skills}>
            <div className={styles.skill}>
              <FaHtml5 />
              <span>HTML</span>
            </div>
            <div className={styles.skill}>
              <FaCss3 />
              <span>CSS</span>
            </div>
            <div className={styles.skill}>
              <DiJavascript1 />
              <span>JavaScript</span>
            </div>
            <div className={styles.skill}>
              <DiJava />
              <span>Java</span>
            </div>
            <div className={styles.skill}>
              <SiTailwindcss />
              <span>Tailwind</span>
            </div>
            <div className={styles.skill}>
              <DiReact />
              <span>React.js</span>
            </div>
            <div className={styles.skill}>
              <SiFirebase />
              <span>Firebase</span>
            </div>
            <div className={styles.skill}>
              <DiGit />
              <span>Git</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
