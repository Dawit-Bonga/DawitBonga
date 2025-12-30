import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '@/lib/projects'

export default function ProjectsPage() {
  const projects = getProjects()

  return (
    <div className="container">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      
      <main>
        <h1>Projects</h1>
        <ul className="blog-list">
          {projects.map((project) => (
            <li key={project.slug} className="blog-item">
              <Link href={`/projects/${project.slug}`}>
                <div className="blog-item-content">
                  {project.thumbnail && (
                    <div className="blog-thumbnail">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={120}
                        height={80}
                        className="thumbnail-image"
                      />
                    </div>
                  )}
                  <div className="blog-text-content">
                    <div className="blog-title">{project.title}</div>
                    <div style={{ marginBottom: '8px', color: '#4a4a4a' }}>{project.description}</div>
                    {project.technologies && project.technologies.length > 0 && (
                      <div style={{ fontSize: '14px', color: '#888', marginBottom: '8px' }}>
                        {project.technologies.join(' • ')}
                      </div>
                    )}
                    <div className="blog-date">{project.date}</div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

