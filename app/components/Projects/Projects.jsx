import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
        <h2>Current Projects</h2>
        <hr className={styles.hr} />
      </div>
      <div className={styles.projects}>
        <div className={styles.project}>
          <a href="https://admin-dashboard-books.vercel.app/" target="_blank" className={styles.link}>
            <img className={styles.image} src="/admin_dashboard.png" />
          </a>
          <div className={styles.projectDetails}>
            <h2><a href="https://github.com/Jacquiiiii/Admin-Dashboard" target="_blank">Admin Dashboard</a></h2>
            <span>Add description and highlights</span>
          </div>
        </div>
        <div className={styles.project}>
          <a href="https://github.com/Jacquiiiii/TheDogStore" target="_blank" className={styles.link}>
            <img className={styles.image} src="/dog_store.png" />
          </a>
          <div className={styles.projectDetails}>
            <h2><a href="https://github.com/Jacquiiiii/TheDogStore" target="_blank">The Dog Store</a></h2>
            <span>Add description and highlights</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects