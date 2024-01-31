import Link from "next/link"
import styles from "./Nav.module.css"

const Nav = () => {
  return (
    <>
      <nav className={styles.links} id="home">
        <Link href="#home" className={styles.link}>Home</Link>
        <Link href="#skills" className={styles.link}>Skills</Link>
        <Link href="#projects" className={styles.link}>Projects</Link>
        <Link href="#contact" className={styles.link}>Contact</Link>
      </nav>
      <hr className={styles.hr} />
    </>
  )
}

export default Nav