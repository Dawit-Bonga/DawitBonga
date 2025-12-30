// Blog posts data
// To add a new blog post, simply add a new object to this array

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: 'personal' | 'media review' | 'technology'
  thumbnail?: string
  content: string
}

const blogPosts: BlogPost[] = [
  // {
  //   slug: 'my-first-post',
  //   title: 'My First Blog Post',
  //   date: 'January 15, 2024',
  //   category: 'personal',
  //   content: `
  //     <p>Welcome to my blog! This is my first post. I'm excited to share my thoughts and experiences here.</p>
      
  //     <p>This is a simple, clean blog where I can write about things that interest me. The design is minimal and focused on the content.</p>
      
  //     <h2>Getting Started</h2>
      
  //     <p>I wanted to create a space where I could share my ideas without distractions. A clean white background, simple typography, and focus on what matters: the words.</p>
      
  //     <p>Feel free to check back for more posts in the future!</p>
  //   `,
  // },
  {
    slug: 'building-this-portfolio',
    title: 'Building This Portfolio',
    date: 'Dec 28, 2025',
    category: 'technology',
    content: `
      <p>I recently decided to build a new portfolio website. I wanted something simple, clean, and easy to maintain.</p>
      
      <h2>Design Philosophy</h2>
      
      <p>The design is intentionally minimal. White background, black text, simple navigation. No unnecessary elements or distractions. I wanted this since it's easier to manage and makes me look mad mysterious.</p>
      
      <h2>Technology Choices</h2>
      
      <p>I chose Next.js for this project because it makes it easy to create dynamic routes for blog posts while keeping everything simple and performant.</p>
      
      <p>Adding new blog posts is as simple as adding a new entry to the blog data file. No database needed, no complex setup required.</p>
    `,
  },
  {
  slug: 'pluribus',
  title: 'Pluribus: An Apple TV original',
  date: 'Dec 29, 2025',
  category: 'media review',
  thumbnail: '/thumbnails/pluribus.webp',  
  content: `
    <p>
      Imagine a world where individuality ceases to exist. Pluribus is an Apple Original series where humanity 
      has transformed into a singular hive mind—except for 12 isolated survivors. I am not the best at explaining 
      topics but it's a very interesting show. We follow our main character, Carol, who didn't get survived the 
      worldwide joining("Plurbing" as I call it) and she follow her journey as she fights against the hive.
    </p>

    <p style="color:red;">
      <strong>This will OFC have spoilers to be careful reading</strong>
    </p>
    
    <p>
      The hive mind all share the same knowledge and feelings. So a 6 year old and a 90 year old in the hive 
      both have the knowledge to perform open heart surgery. You see some very funny scenes building on this later.
    </p>
    
    <h2>My Thoughts on The Show</h2>
    <p>
      I love the show so much. My favorite part of this show is how the hive mind is so honest yet stays such a 
      mystery even at the last episode. The hive has an innate need to spread what they have since they see it 
      as saving people and this causes for them to have some unhinged and off putting strategies. However even 
      with all this, I couldn't bring myself to hate the hive(not until the last episode) because they didn't 
      ask for this as a virus is what caused the hive mind to happen either way.
    </p>

    <h2>The Hive and Culutre</h2>
    <p>
      The hive shares the memory of every human within it and this allows the hive to cater to the 12 isolated 
      survivors of the Plurbing. It uses the memory of their loved ones to create a safe space for the survivors 
      as the hive has no wish to harm them. The hive however actively works to bring these survivors over to the 
      hive side and by the end of the first season, they have a way to do so.
    </p>

    <p>
      In the last episode of the first season, we see one of the survivor give the hive consent to take her into 
      the hive. Kusimayu was an indigenous Peruvian girl and during her turning ceremony, the Hive is seen singing 
      and chanting cultural rituals while turning Kusimayu into a plurb. However, once Kusimayu closes her eyes 
      and the plurbing takes effect, the hive goes silent and never speaks in that area again. That's when I 
      realized(also through some reddit insight) that the Hive doesn't understand culture but instead it just has 
      knowledge. Kusimayu was the last remaining person of her culture and the Hive imitated her culture until 
      she was a plurb and then *poof* her culture is never going to be seen again. The Hive has no need for 
      culture so they don't speak, don't have any ceremonies or anything more than a connection.
    </p>

    <h3>The Value of Individuality</h3>
    <p>
      As someone who grew up immersed in Ethiopian culture, that silence terrified me. I can't imagine a world 
      where humanity ceases to have distinct identities and simply functions for the sake of efficiency. 
      Culture is about expression and difference, but the Hive only cares about survival and expansion.
    </p>      
    
    <blockquote>
      <strong>Rating:</strong> Highly Recommended. A mix of funny, scary, and thought-provoking.
    </blockquote>
  
    <hr />
    
    <p><em>Thanks for reading! Feel free to check back for more reviews soon.</em></p>
  `,
},
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => {
    // Sort by date, newest first
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

