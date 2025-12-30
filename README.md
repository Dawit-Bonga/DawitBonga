# Portfolio

A simple, clean portfolio website with a projects section and blog.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Blog Posts

To add a new blog post, edit the `lib/blog.ts` file and add a new object to the `blogPosts` array:

```typescript
{
  slug: 'your-post-slug',
  title: 'Your Post Title',
  date: 'January 25, 2024',
  content: `
    <p>Your blog post content here. You can use HTML tags.</p>
    <h2>Subheading</h2>
    <p>More content...</p>
  `,
}
```

The slug should be URL-friendly (lowercase, hyphens instead of spaces).

## Adding Projects

To add a new project, edit the `lib/projects.ts` file and add a new object to the `projects` array:

```typescript
{
  slug: 'your-project-slug',
  title: 'Your Project Title',
  description: 'A brief description of your project',
  date: 'January 2024',
  technologies: ['React', 'TypeScript', 'Next.js'],
  link: 'https://your-project-url.com', // Optional
  github: 'https://github.com/yourusername/project', // Optional
  content: `
    <p>Your project description here. You can use HTML tags.</p>
    <h2>Overview</h2>
    <p>More details about your project...</p>
  `,
}
```

The slug should be URL-friendly (lowercase, hyphens instead of spaces).

## Build for Production

```bash
npm run build
npm start
```

