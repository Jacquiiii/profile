import styles from './work.module.css'

const Work = () => {
  return (
    <div className={styles.work}>
      <div className={styles.project}>
        <a href="https://admin-dashboard-books.vercel.app/" target="_blank">
          <img className={styles.image} src="/admin_dashboard.png" />
        </a>
        <div className={styles.projectDetails}>
          <h2><a href="https://github.com/Jacquiiiii/Admin-Dashboard" target="_blank">Admin Dashboard</a></h2>
          <span>Add description and highlights</span>
        </div>
      </div>
    </div>
  )
}

export default Work