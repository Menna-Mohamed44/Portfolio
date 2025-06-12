import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.description}>
              I'm Menna, a passionate AI Engineer and Fullstack Developer with expertise in creating innovative
              solutions that bridge the gap between artificial intelligence and web development. My journey in
              technology has led me to specialize in machine learning, computer vision, and building scalable web
              applications.
            </p>
            <p className={styles.description}>
              With a strong foundation in both frontend and backend technologies, I enjoy tackling complex problems and
              turning ideas into reality. Whether it's developing intelligent systems for healthcare, creating computer
              vision applications, or building responsive web interfaces, I'm always excited to push the boundaries of
              what's possible.
            </p>
            <div className={styles.skills}>
              <h3 className={styles.skillsTitle}>Technical Skills</h3>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4>AI & ML</h4>
                  <ul>
                    <li>Machine Learning</li>
                    <li>Computer Vision</li>
                    <li>Natural Language Processing</li>
                    <li>Deep Learning</li>
                  </ul>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Web Development</h4>
                  <ul>
                    <li>React & Vue.js</li>
                    <li>Node.js & Python</li>
                    <li>Database Design</li>
                    <li>API Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.skillsAnimation}>
              {/* Central Hub */}
              <div className={styles.centralHub}>
                <div className={styles.hubCore}></div>
                <div className={styles.hubRing}></div>
                <div className={styles.hubRing}></div>
              </div>

              {/* Skill Nodes */}
              <div className={styles.skillNode} data-skill="AI" style={{ "--delay": "0s", "--angle": "0deg" }}></div>
              <div className={styles.skillNode} data-skill="ML" style={{ "--delay": "0.8s", "--angle": "72deg" }}></div>
              <div
                className={styles.skillNode}
                data-skill="CV"
                style={{ "--delay": "1.6s", "--angle": "144deg" }}
              ></div>
              <div
                className={styles.skillNode}
                data-skill="NLP"
                style={{ "--delay": "2.4s", "--angle": "216deg" }}
              ></div>
              <div
                className={styles.skillNode}
                data-skill="Web"
                style={{ "--delay": "3.2s", "--angle": "288deg" }}
              ></div>

              {/* Data Flow Lines */}
              <div className={styles.dataFlow}>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`${styles.dataLine} ${styles[`dataLine${i + 1}`]}`}></div>
                ))}
              </div>

              {/* Binary Rain */}
              <div className={styles.binaryRain}>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`${styles.binaryColumn} ${styles[`column${i + 1}`]}`}>
                    <span>1</span>
                    <span>0</span>
                    <span>1</span>
                    <span>1</span>
                    <span>0</span>
                  </div>
                ))}
              </div>

              {/* Tech Icons */}
              <div className={styles.techIcons}>
                <div className={styles.techIcon} style={{ "--delay": "1s" }}>
                  ⚛️
                </div>
                <div className={styles.techIcon} style={{ "--delay": "2s" }}>
                  🐍
                </div>
                <div className={styles.techIcon} style={{ "--delay": "3s" }}>
                  🧠
                </div>
                <div className={styles.techIcon} style={{ "--delay": "4s" }}>
                  📊
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
