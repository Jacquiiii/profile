import { Freehand } from 'next/font/google'
import styles from './About.module.css'

const cursive = Freehand({ subsets: ["latin"], weight: ['400'] })

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.bio}>
        <h1 className={`${styles.h1} ${cursive.className}`}>Jacqui Koroll</h1>
        <h2>Full-stack web developer from Victoria, BC.</h2>
        <button className={styles.resumeButton}>Check out my resume --&gt;</button>
      </div>
    </section>
  )
}

export default About