"use client"

import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📧</div>
              <h3>Email</h3>
              <p>pro.mennamohamed@gmail.com</p>
              <a href="mailto:pro.mennamohamed@gmail.com" className={styles.contactLink}>
                Send Email
              </a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📱</div>
              <h3>Phone</h3>
              <p>01552077682</p>
              <a href="tel:01552077682" className={styles.contactLink}>
                Call Now
              </a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🌐</div>
              <h3>Portfolio</h3>
              <p>mennamohamed.com</p>
              <a
                href="https://mennamohamed.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
