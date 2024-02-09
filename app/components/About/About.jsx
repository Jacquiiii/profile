import styles from './About.module.css'

const About = () => {
  // Separates the letters so the animation can be applied to each letter
  // const name = "Hey, I'm Jacqui.".split("").map((letter, index) => (
  //   letter === " " 
  //     ? <span key={index}>&nbsp;</span> 
  //     : <span key={index} style={{ animationDelay: `${index * 0.1}s` }} className={styles.letter}>{letter}</span>
  // ))

  return (
    <section className={styles.about} id="about">
      <div className={styles.bio}>
        <h1 className={styles.h1}>Hey, I'm Jacqui.</h1>
        <h2>Full-stack web developer from Victoria, BC.</h2>
        <p>Sed dapibus vestibulum luctus. Donec ac consequat urna, eu efficitur dui. In hac habitasse platea dictumst. Curabitur non ligula ut metus dignissim pellentesque. Curabitur ex sem, consequat in tincidunt efficitur, eleifend quis risus. Nulla id venenatis nibh. Sed non est et risus ullamcorper ornare.</p>
      </div>
    </section>
  )
}

export default About