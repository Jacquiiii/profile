import styles from './Skills.module.css'

const images = [
  "https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256",
  "https://cdn.iconscout.com/icon/premium/png-512-thumb/css-22-116632.png?f=webp&w=256",
  "https://cdn.iconscout.com/icon/free/png-512/free-html-59-225995.png?f=webp&w=256",
  "https://cdn.iconscout.com/icon/free/png-512/free-node-js-2-1174936.png?f=webp&w=256",
  "https://cdn.iconscout.com/icon/premium/png-512-thumb/react-2752089-2284906.png?f=webp&w=256",
  "https://cdn.iconscout.com/icon/premium/png-512-thumb/next-9305886-7694085.png?f=webp&w=256",
  "https://cdn.iconscout.com/icon/free/png-512/free-redux-283024.png?f=webp&w=256",
  "https://cdn.iconscout.com/icon/free/png-512/free-git-16-1175195.png?f=webp&w=256",
  "https://cdn.iconscout.com/icon/free/png-512/free-postgresql-9-1175120.png?f=webp&w=256",
  "https://cdn.iconscout.com/icon/free/png-512/free-jest-3521517-2945020.png?f=webp&w=256",
  "https://cdn.iconscout.com/icon/premium/png-512-thumb/cypress-5-199153.png?f=webp&w=256",
  "https://cdn.iconscout.com/icon/premium/png-512-thumb/storybook-1876339-1587191.png?f=webp&w=256"
]

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      {images.map((image, index) => (
        <div className={styles.box}>
          <img src={image} alt="skill" className={styles.image} />
        </div>
      ))}
    </section>
  )
}

export default Skills