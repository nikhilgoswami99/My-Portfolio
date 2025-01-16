import styles from "./home.module.css";

function Home() {
  return (
    <>
     <section className={styles.main}>
      <div className={styles.greeting}>
        <h1>Hello {" "}</h1>
        <h1>My name is Nikhil Goswami</h1>
        <img src="" alt="home_img" />
      </div>
      <div className={styles.introduction}></div>
     </section>
    </>
  );
}

export default Home;
