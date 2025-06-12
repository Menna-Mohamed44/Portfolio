import styles from "./Projects.module.css"

const Projects = () => {
  const projects = [
    {
      title: "Ray Ban Face Analysis",
      description:
        "AI-powered application that analyzes facial features to recommend the perfect glasses based on face shape, skin tone, and other important characteristics.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ray%20ban-jfKiVK7Trv3tRKnK9LG4ZZED2gxSXH.png",
      technologies: ["Computer Vision", "Face Detection", "Machine Learning", "React"],
      features: ["Face Shape Detection", "Skin Tone Analysis", "Personalized Recommendations", "Real-time Processing"],
      link: "https://raybansubset.netlify.app/",
    },
    {
      title: "Multi-Disease Prediction System",
      description:
        "Comprehensive healthcare solution featuring three specialized ML models for predicting diabetes, heart diseases, and Parkinson's disease.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ML%20health%20predictions-nVytsQWbaQf91ytpiNU4KSc6ez3YDz.png",
      technologies: ["Machine Learning", "Healthcare AI", "Python", "Data Science"],
      features: ["Diabetes Prediction", "Heart Disease Detection", "Parkinson's Analysis", "Medical Data Processing"],
      link: "https://multiple-disease-prediction-web.netlify.app/",
    },
    {
      title: "Medical Image Processing",
      description:
        "Advanced medical imaging solution using various filters and enhancement techniques to improve medical image quality for better diagnosis.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medicalweb-4e1254zNb7Ayj6qHG1dbFnTGO0pVJL.png",
      technologies: ["Image Processing", "Medical Imaging", "Computer Vision", "Python"],
      features: ["Image Enhancement", "Noise Reduction", "Filter Applications", "Quality Improvement"],
      link: "https://github.com/Menna-Mohamed44/medical-image-processor",
    },
    {
      title: "Fake News Detection",
      description:
        "NLP-based system that analyzes news articles and social media content to identify and flag potentially false or misleading information.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fake-news-12AkINMwaLG7wSQKvkY69CGPFBTiUj.png",
      technologies: ["NLP", "Text Analysis", "Machine Learning", "Python"],
      features: ["Text Classification", "Sentiment Analysis", "Source Verification", "Real-time Detection"],
      link: "https://github.com/Menna-Mohamed44/Fake-news-Detection",
    },
  ]

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>Innovative AI solutions and web applications that showcase my expertise</p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    View Project
                  </a>
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.projectFeatures}>
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.projectTech}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
