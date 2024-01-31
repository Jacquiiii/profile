'use client'

import styles from './ScrollToTop.module.css'

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <button 
      onClick={handleScrollToTop} 
      className={styles.button}
    >
      Back to Top
    </button>
  )
}

export default ScrollToTop