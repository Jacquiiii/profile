import styles from './ThemeToggle.module.css'

// TODO: Add light / dark mode functionality
const ThemeToggle = () => {
  return (
    <div className={styles.toggle}>
      <span className={styles.icon}>☀</span>
      <input type="checkbox" className={styles.input} />
      <span className={styles.icon}>☽</span>
    </div>
  )
}

export default ThemeToggle