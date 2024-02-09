import styles from './Skills.module.css'

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.header}>
        <h2>Skills</h2>
      </div>
      <div className={styles.skillsContainer}>
        <div className={`${styles.skillsRow} ${styles.fallInAnimation}`}>
          <div className={styles.skill}>Javascript</div>
          <div className={styles.skill}>CSS</div>
          <div className={styles.skill}>HTML</div>
          <div className={styles.skill}>PostgreSQL</div>
          <div className={styles.skill}>Node.js</div>
          <div className={styles.skill}>React</div>
          <div className={styles.skill}>Next.js</div>
          <div className={styles.skill}>Redux</div>
          <div className={styles.skill}>Git</div>
          <div className={styles.skill}>Jest</div>
          <div className={styles.skill}>Cypress</div>
          <div className={styles.skill}>Storybook</div>
        </div>
      </div>
    </section>
  )
}

export default Skills