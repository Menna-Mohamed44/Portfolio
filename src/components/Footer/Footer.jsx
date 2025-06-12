import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Menna Mohamed</h3>
            <p className={styles.footerDescription}>
              AI Engineer & Fullstack Developer passionate about creating innovative solutions that bridge artificial
              intelligence and web development.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Services</h4>
            <ul className={styles.footerLinks}>
              <li>Web Development</li>
              <li>Model Development</li>
              <li>Model Deployment</li>
              <li>NLP Solutions</li>
              <li>Computer Vision</li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contact Info</h4>
            <div className={styles.contactInfo}>
              <p>📧 pro.mennamohamed@gmail.com</p>
              <p>📱 01552077682</p>
              <p>🌐 mennamohamed.com</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 Menna Mohamed. All rights reserved.</p>
          <p>Built with React & Vite</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
