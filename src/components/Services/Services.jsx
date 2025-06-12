import styles from "./Services.module.css"

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Full-stack web applications using modern frameworks and technologies",
      icon: "🌐",
      features: ["Responsive Design", "Modern Frameworks", "Database Integration", "API Development"],
    },
    {
      title: "Model Development",
      description: "Custom machine learning models tailored to your specific needs",
      icon: "🤖",
      features: ["Custom ML Models", "Data Analysis", "Model Training", "Performance Optimization"],
    },
    {
      title: "Model Deployment",
      description: "Deploy and scale your AI models in production environments",
      icon: "🚀",
      features: ["Cloud Deployment", "API Integration", "Scalable Solutions", "Monitoring & Maintenance"],
    },
    {
      title: "NLP Solutions",
      description: "Natural Language Processing for text analysis and understanding",
      icon: "📝",
      features: ["Text Analysis", "Sentiment Analysis", "Language Models", "Chatbot Development"],
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis using advanced computer vision techniques",
      icon: "👁️",
      features: ["Image Recognition", "Object Detection", "Face Analysis", "Medical Imaging"],
    },
  ]

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Services</h2>
          <p className={styles.subtitle}>Comprehensive AI and web development solutions to bring your ideas to life</p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
