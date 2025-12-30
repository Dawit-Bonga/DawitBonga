import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts, getBlogPost } from '@/lib/blog'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
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
        <Link href="/blog" className="back-link">← Back to blog</Link>
        
        <article className="blog-content">
          {post.thumbnail && (
            <div className="article-thumbnail">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={800}
                height={400}
                className="article-image"
              />
            </div>
          )}
          <h1>{post.title}</h1>
          <div className="blog-date" style={{ marginBottom: '40px' }}>{post.date}</div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
    </div>
  )
}

