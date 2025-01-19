import styles from "./about.module.css";
import about_img from '../../assets/about_img.png'

import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase
} from "react-icons/si";


function About() {

  return (
    <>
      <section className={styles.main}>
        <div className={styles.about_me}>
          <div className={styles.about_text}>
            <h1 className={styles.about_heading}>About Me</h1>
            <p className={styles.about_para}>
              Hello, I’m <span className="voilet_text">Nikhil Goswami</span>, a Software Developer. I have a strong academic foundation with a B.Tech in <span className="voilet_text">Computer Science and Engineering</span> from PSIT, Kanpur.
            </p>
            <div className={styles.about_para}>
              <p>My technical expertise includes:</p>
              <br />
              <p>
                1. Proficiency in programming languages such as <span className="voilet_text">Java,
                JavaScript</span>.
              </p> 
              <br />
              <p>
                2. Experience with modern web development library/frameworks like <span className="voilet_text">React.js</span>.
              </p>
              <br />
              <p>
                3. Knowledge of <span className="voilet_text">Data Structures and Algorithms</span>,
                Hands-on experience in developing scalable and
                efficient software solutions.
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
          
          <div className={styles.skill}>HTML</div>
          <div className={styles.skill}>CSS</div>
          <div className={styles.skill}>JAVAS</div>
          <div className={styles.skill}>JAVA</div>
          <div className={styles.skill}>TAILWIND</div>
          <div className={styles.skill}>REACT.JS</div>
          <div className={styles.skill}>FIREBASE</div>
        </div>
      </section>
    </>
  );
}


export default About;
