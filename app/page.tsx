import Link from 'next/link'
import { getWorkExperience } from '@/lib/experience'

export default function Home() {
  const experiences = getWorkExperience()

  return (
    <div className="container">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      
      <div className="home-layout">
        <aside className="about-section">
          <h1 className="about-name">Dawit Bonga</h1>
          <p className="about-bio">
            I'm a developer focused on building clean, efficient solutions. 
            I enjoy working on projects that make a difference and learning 
            new technologies along the way.
          </p>
          <div className="about-contact">
            dawitbonga0@gmail.com
          </div>
          <div className="about-links">
            <a href="https://github.com/dawit-bonga" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span style={{ color: '#ccc' }}>•</span>
            <a href="https://linkedin.com/dawit-bonga" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </aside>

        <main className="experience-section">
          <h2>Work Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <div className="experience-title">{exp.title}</div>
                  <div className="experience-company">{exp.company}</div>
                </div>
                <div className="experience-date">{exp.date}</div>
              </div>
              <div className="experience-description">
                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="experience-technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

