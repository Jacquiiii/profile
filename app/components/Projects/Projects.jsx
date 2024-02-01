import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2>Current Projects</h2>
      <hr className={styles.hr} />
      <div className={styles.project}>
        <a href="https://admin-dashboard-books.vercel.app/" target="_blank" className={styles.link}>
          <img className={styles.image} src="/admin_dashboard.png" />
        </a>
        <div className={styles.projectDetails}>
          <h2><a href="https://github.com/Jacquiiiii/Admin-Dashboard" target="_blank">Admin Dashboard</a></h2>
          <span>Add description and highlights</span>
        </div>
      </div>
    </section>
  )
}

export default Projects