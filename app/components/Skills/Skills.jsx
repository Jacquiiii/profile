import styles from './Skills.module.css'

const images = {
  js: "https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256",
  css: "https://cdn.iconscout.com/icon/premium/png-512-thumb/css-22-116632.png?f=webp&w=256",
  html: "https://cdn.iconscout.com/icon/free/png-512/free-html-59-225995.png?f=webp&w=256",
  node: "https://cdn.iconscout.com/icon/free/png-512/free-node-js-2-1174936.png?f=webp&w=256",
  react: "https://cdn.iconscout.com/icon/premium/png-512-thumb/react-2752089-2284906.png?f=webp&w=256",
  next: "https://cdn.iconscout.com/icon/premium/png-512-thumb/next-9305886-7694085.png?f=webp&w=256",
  redux: "https://cdn.iconscout.com/icon/free/png-512/free-redux-283024.png?f=webp&w=256",
  git: "https://cdn.iconscout.com/icon/free/png-512/free-git-16-1175195.png?f=webp&w=256",
  postgresql: "https://cdn.iconscout.com/icon/free/png-512/free-postgresql-9-1175120.png?f=webp&w=256",
  jest: "https://cdn.iconscout.com/icon/free/png-512/free-jest-3521517-2945020.png?f=webp&w=256",
  cypress: "https://cdn.iconscout.com/icon/premium/png-512-thumb/cypress-5-199153.png?f=webp&w=256",
  storybook: "https://cdn.iconscout.com/icon/premium/png-512-thumb/storybook-1876339-1587191.png?f=webp&w=256"
}

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.header}>
        <h2>Skills</h2>
        <hr className={styles.hr} />
      </div>
      <div className={styles.images}>
        <div className={styles.imageRow}>
          <img src={images.js} alt="javascript" className={styles.image} />
          <img src={images.css} alt="css" className={styles.image} />
          <img src={images.html} alt="html 5" className={styles.image} />
          <img src={images.postgresql} alt="postgresql" className={styles.image} />
        </div>
        <div className={styles.imageRow}>
          <img src={images.node} alt="nodejs" className={styles.image} />
          <img src={images.react} alt="react" className={styles.image} />
          <img src={images.next} alt="nextjs" className={styles.image} />
          <img src={images.redux} alt="redux" className={styles.image} />
        </div>
        <div className={styles.imageRow}>
          <img src={images.cypress} alt="cypress" className={styles.image} />
          <img src={images.jest} alt="jest" className={styles.image} />
          <img src={images.storybook} alt="storybook" className={styles.image} />
          <img src={images.git} alt="git" className={styles.image} />
        </div>
      </div>
    </section>
  )
}

export default Skills