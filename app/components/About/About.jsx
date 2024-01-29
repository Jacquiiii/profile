import Link from 'next/link'
import styles from './About.module.css'

const About = () => {
  // Separates the letters so the animation can be applied to each letter
  const name = "Jacqui Koroll".split("").map((letter, index) => (
    letter === " " 
      ? <span key={index}>&nbsp;</span> 
      : <span key={index} style={{ animationDelay: `${index * 0.1}s` }} className={styles.letter}>{letter}</span>
  ))

  return (
    <div className={styles.about}>
      <h1 className={styles.h1}>{name}</h1>
      <h2>FULL-STACK WEB DEVELOPER</h2>
      <div className={styles.links}>
        <Link href="https://www.linkedin.com/in/jacqui-koroll-434445204/" target="_blank">
          <img 
            src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="LinkedIn"
            className={styles.linkedIn}
          />
        </Link>
        <Link href="https://github.com/Jacquiiiii" target="_blank">
          <img 
            src="https://www.shareicon.net/download/2015/09/15/101512_logo.ico" 
            alt="Github"
            className={styles.gitHub}
          />
        </Link>
      </div>
    </div>
  )
}

export default About