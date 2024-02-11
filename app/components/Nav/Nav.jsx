import Link from "next/link"
import styles from "./Nav.module.css"
import ThemeToggle from "./ThemeToggle/ThemeToggle"

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <Link href="#about" className={styles.link}><span className={styles.j}>j</span></Link>
        <div className={styles.links}>
          <Link href="#experience" className={styles.link}>Skills</Link>
          <Link href="#projects" className={styles.link}>Projects</Link>
          <Link href="#contact" className={styles.link}>Contact</Link>
          <ThemeToggle />
        </div>
      </div>
      <hr className={styles.hr} />
    </nav>
  )
}

export default Nav