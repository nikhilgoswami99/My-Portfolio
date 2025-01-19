import styles from './projects.module.css'


function Projects()
{
    return <>
    <section className={styles.main}>
        <h1 className={styles.projects_heading}>My Recent Projects</h1>
        <div className={styles.my_projects}>
        <div className={styles.projects}></div>
        <div className={styles.projects}></div>
        <div className={styles.projects}></div>
        <div className={styles.projects}></div>
        <div className={styles.projects}></div>
        <div className={styles.projects}></div>
        </div>
    </section>
    </>
}

export default Projects;