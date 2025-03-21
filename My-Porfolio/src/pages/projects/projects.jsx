import styles from './projects.module.css'
import Amazon_Project from '../../assets/Amazon_Project.png'


function Projects()
{
    return <>
    <section className={styles.main}>
        <h1 className={styles.projects_heading}>My Recent <span className='voilet_text'>Projects</span></h1>
        <div className={styles.my_projects}>
        <div className={styles.projects}>
            <img className={styles.project_Image} src={Amazon_Project} alt="Amazon Clone" />
            <div className={styles.project_info}>
                <h3 className='voilet_text'>Amazon Clone</h3>
                <p>
                Developed a full-stack e-commerce platform using React.js (Vite) and Firebase with Amazon Product Data API. Used React Context API for state management and integrated Gemini AI for smart cart to get product details.
                </p>
                <button className={styles.hosted_link}>
                <a target='_blank' href="https://amazon-clone-git-main-nikhil-goswamis-projects.vercel.app/">Hosted Link</a>
                </button>
            </div>
        </div>
        <div style={{color: "orange", display: "flex", alignItems: "center", justifyContent: "center"}} className={styles.projects}>Adding Soon...</div>
        </div>
    </section>
    </>
}

export default Projects;