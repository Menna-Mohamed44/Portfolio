import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Hi, I'm <span className={styles.name}>Menna</span>
            </h1>
            <h2 className={styles.subtitle}>AI Engineer & Fullstack Developer</h2>
            <p className={styles.description}>
              I create innovative web applications and integrate cutting-edge AI models to solve real-world problems.
              Specializing in machine learning, computer vision, and full-stack development.
            </p>
            <div className={styles.buttons}>
              <a href="#projects" className={styles.primaryBtn}>
                View My Work
              </a>
              <a href="#contact" className={styles.secondaryBtn}>
                Get In Touch
              </a>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.animationContainer}>
              {/* Particle System */}
              <div className={styles.particleSystem}>
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`${styles.particle} ${styles[`particle${i + 1}`]}`}></div>
                ))}
              </div>

              {/* Neural Network Animation */}
              <div className={styles.neuralNetwork}>
                <div className={styles.neuralNode}></div>
                <div className={styles.neuralNode}></div>
                <div className={styles.neuralNode}></div>
                <div className={styles.neuralNode}></div>
                <div className={styles.neuralNode}></div>
                <div className={styles.neuralConnection}></div>
                <div className={styles.neuralConnection}></div>
                <div className={styles.neuralConnection}></div>
                <div className={styles.neuralConnection}></div>
              </div>

              {/* Code Terminal */}
              <div className={styles.codeTerminal}>
                <div className={styles.terminalHeader}>
                  <div className={styles.terminalDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className={styles.terminalTitle}>AI_Model.py</div>
                </div>
                <div className={styles.terminalBody}>
                  <div className={styles.codeLine}>
                    <span className={styles.keyword}>import</span> tensorflow <span className={styles.keyword}>as</span>{" "}
                    tf
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.keyword}>def</span> <span className={styles.function}>train_model</span>():
                  </div>
                  <div className={styles.codeLine}>
                    &nbsp;&nbsp;model = tf.<span className={styles.function}>keras</span>...
                  </div>
                  <div className={styles.codeLine}>
                    &nbsp;&nbsp;<span className={styles.keyword}>return</span> model
                  </div>
                  <div className={styles.cursor}></div>
                </div>
              </div>

              {/* Geometric Shapes */}
              <div className={styles.geometricShapes}>
                <div className={styles.hexagon}></div>
                <div className={styles.triangle}></div>
                <div className={styles.circle}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
