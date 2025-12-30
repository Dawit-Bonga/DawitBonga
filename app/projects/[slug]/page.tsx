import Link from 'next/link'
import Image from 'next/image'
import { getProjects, getProject } from '@/lib/projects'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const projects = getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      
      <main>
        <Link href="/projects" className="back-link">← Back to projects</Link>
        
        <article className="blog-content">
          {project.thumbnail && (
            <div className="article-thumbnail">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={800}
                height={400}
                className="article-image"
              />
            </div>
          )}
          <h1>{project.title}</h1>
          <div className="blog-date" style={{ marginBottom: '20px', fontSize: '18px' }}>
            {project.description}
          </div>
          
          {project.technologies && project.technologies.length > 0 && (
            <div className="blog-date" style={{ marginBottom: '20px', fontSize: '14px' }}>
              <strong>Technologies:</strong> {project.technologies.join(' • ')}
            </div>
          )}
          
          <div className="blog-date" style={{ marginBottom: '30px', fontSize: '14px' }}>
            {project.date}
          </div>
          
          {(project.link || project.github) && (
            <div style={{ marginBottom: '40px' }}>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ marginRight: '20px', fontSize: '16px' }}
                >
                  View Project →
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ fontSize: '16px' }}
                >
                  View Code →
                </a>
              )}
            </div>
          )}
          
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </article>
      </main>
    </div>
  )
}

