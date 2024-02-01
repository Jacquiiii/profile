import Link from 'next/link'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2>Get in touch</h2>
      <hr className={styles.hr} />
      <div className={styles.contactMethods}>
        <div className={styles.formContainer}>
          <form action="/submit" method="post" className={styles.form}>
            <input className={styles.input} type="text" id="name" name="name" placeholder="Enter name" required />
            <input className={styles.input} type="email" id="email" name="email" placeholder="Enter email" required />
            <textarea className={styles.message} id="message" name="message" rows="4" required placeholder="Enter message"></textarea>
            <button className={styles.button} type="submit">Submit</button>
          </form>
        </div>
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
    </section>
  )
}

export default Contact