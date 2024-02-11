import { Freehand } from 'next/font/google'
import styles from './About.module.css'

const cursive = Freehand({ subsets: ["latin"], weight: ['400'] })

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.bio}>
        <h1 className={`${styles.h1} ${cursive.className}`}>Hi, I'm Jacqui.</h1>
        <h2>Full-stack web developer from Victoria, BC.</h2>
        <p>Sed dapibus vestibulum luctus. Donec ac consequat urna, eu efficitur dui. In hac habitasse platea dictumst. Curabitur non ligula ut metus dignissim pellentesque. Curabitur ex sem, consequat in tincidunt efficitur, eleifend quis risus. Nulla id venenatis nibh. Sed non est et risus ullamcorper ornare.</p>
      </div>
    </section>
  )
}

export default About