import Link from "next/link"
import styles from "./Nav.module.css"
import ThemeToggle from "./ThemeToggle/ThemeToggle"

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <div className={styles.links} id="home">
          <Link href="#skills" className={styles.link}>Skills</Link>
          <Link href="#projects" className={styles.link}>Projects</Link>
          <Link href="#contact" className={styles.link}>Contact</Link>
        </div>
        <div className={styles.toggle}>
          <ThemeToggle />
        </div>
      </div>
      <hr className={styles.hr} />
    </nav>
  )
}

export default Nav