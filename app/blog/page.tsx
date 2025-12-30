'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from '@/lib/blog'
import { useState } from 'react'

export default function BlogPage() {
  const allPosts = getBlogPosts()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const categories = ['personal', 'media review', 'technology']
  const posts = selectedCategory 
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts

  return (
    <div className="container">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      
      <main>
        <h1>Blog</h1>
        
        <div className="category-filters">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`category-filter ${selectedCategory === null ? 'active' : ''}`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <ul className="blog-list">
          {posts.map((post) => (
            <li key={post.slug} className="blog-item">
              <Link href={`/blog/${post.slug}`}>
                <div className="blog-item-content">
                  {post.thumbnail && (
                    <div className="blog-thumbnail">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        width={120}
                        height={80}
                        className="thumbnail-image"
                      />
                    </div>
                  )}
                  <div className="blog-text-content">
                    <div className="blog-header">
                      <div className="blog-title">{post.title}</div>
                      <span className="blog-category">{post.category}</span>
                    </div>
                    <div className="blog-date">{post.date}</div>
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

