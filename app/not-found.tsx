import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      
      <main>
        <h1>404</h1>
        <p>This page could not be found.</p>
        <p>
          <Link href="/">Go back home →</Link>
        </p>
      </main>
    </div>
  )
}

