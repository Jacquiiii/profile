'use client'

import Link from "next/link"
import styles from "./Nav.module.css"
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathname = usePathname()

  return (
    <>
      <div className={styles.links}>
        <Link 
          href="/" 
          className={pathname === "/" ? styles.activeLink : styles.link}
        >
          Home
        </Link>
        <Link 
          href="/work" 
          className={pathname === "/work" ? styles.activeLink : styles.link}
        >
          Work
        </Link>
        <Link 
          href="/resume" 
          className={pathname === "/resume" ? styles.activeLink : styles.link}
        >
          Resume
        </Link>
        <Link 
          href="/contact" 
          className={pathname === "/contact" ? styles.activeLink : styles.link}>
          Contact
        </Link>
      </div>
      <hr className={styles.hr} />
    </>
  )
}

export default Nav