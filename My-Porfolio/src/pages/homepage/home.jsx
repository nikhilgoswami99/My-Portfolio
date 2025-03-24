import styles from "./home.module.css";
import cartoonImg from "../../assets/home1.png";
import img from '../../assets/home2.png'

import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.greeting}>
          <div className={styles.greeting_text}>
            <h1 className={styles.greet_heading}>Hello </h1>
            <h1 className={styles.greet_heading}>
              My name is <span className="voilet_text">Nikhil Goswami</span>
            </h1>

            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Freelancer",
                  "MERN Stack Developer",
                  "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          <img className={styles.cartoonImg} src={cartoonImg} alt="Home_Img" />
        </div>
        <div className={styles.introduction}>
          <div className={styles.intro_text}>
            <h1 className={styles.intro_heading}>
              LET ME <span className="voilet_text">INTRODUCE</span> MYSELF
            </h1>
            <p className={styles.intro_para}>
              I have developed a deep passion for programming and have acquired
              a solid foundation in this field.
            </p>
            <p className={styles.intro_para}>
              I am proficient in core programming languages such as{" "}
              <span className="voilet_text">Java and JavaScript</span>. My
              primary interests lie in building innovative{" "}
              <span className="voilet_text">Web Technologies and Products</span>
              .
            </p>
            <p className={styles.intro_para}>
              Whenever possible, I channel my enthusiasm into creating impactful
              solutions using modern JavaScript libraries and frameworks such as{" "}
              <span className="voilet_text">React.js</span>.
            </p>
          </div>
          <img className={styles.intro_img} src={img} alt="Developer_Img" />
        </div>
      </section>
    </>
  );
}

export default Home;
