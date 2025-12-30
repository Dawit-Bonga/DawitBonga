// Portfolio projects data
// To add a new project, simply add a new object to this array

export interface Project {
  slug: string
  title: string
  description: string
  date: string
  thumbnail?: string
  technologies?: string[]
  link?: string
  github?: string
  content: string
}

const projects: Project[] = [
  {
    slug: 'anime-recommendation-engine',
    title: 'Anime Recommendation Engine',
    description: 'A collaborative filtering system trained on 35 million ratings using Singular Value Decomposition (SVD).',
    date: 'Winter 2025', // Update this to the actual completion date
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning'],
    // link: 'https://your-demo-link.com', // Optional: Remove if no live demo
    github: 'https://github.com/Dawit-Bonga/Anime_Recommendation_System.git',
    content: `
      <p>Designed and built a recommendation system capable of predicting user preferences for anime titles. The project focuses on model-based collaborative filtering to handle large-scale data efficiency.</p>
      
      <h2>The Challenge</h2>
      
      <p>The core challenge was processing a massive dataset of <strong>35 million user ratings</strong>. Standard memory-based approaches were computationally expensive, requiring a more optimized mathematical approach to handle the sparse user-item matrix.</p>
      
      <h2>Technical Implementation</h2>
      
      <p>I implemented <strong>Singular Value Decomposition (SVD)</strong> to perform matrix factorization. This technique decomposes the user-item interaction matrix into lower-dimensional matrices, capturing "latent factors"—hidden patterns connecting users to specific anime genres or styles.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Scalable Architecture:</strong> Optimized data pipelines using Pandas and NumPy to handle millions of data points without memory overflow.</li>
        <li><strong>Collaborative Filtering:</strong> Predicts ratings based on user similarity patterns rather than just static content tags.</li>
        <li><strong>Performance Metrics:</strong> Evaluated model accuracy using Root Mean Square Error (RMSE) to fine-tune latent factor parameters.</li>
      </ul>
      
      <h2>Results</h2>
      
      <p>The system successfully generates personalized ranked lists for users, demonstrating the ability to apply linear algebra concepts (SVD) to real-world software engineering problems.</p>
    `,
  },
  {
  slug: 'nba-prop-predictor',
  title: 'NBA Prop Predictor',
  description: 'An NBA Stats Predictor to support my PrizePicks strategy.',
  date: 'Winter 2025',
  technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning'],
  // link: 'https://your-demo-link.com', // Optional: Remove if no live demo
  github: 'https://github.com/Dawit-Bonga/NBA_Prop_Predictor', // Make sure this link is correct!
  content: `
    <p>
      Designed and built a machine learning pipeline to predict NBA player performance (points, rebounds, assists) 
      for daily fantasy sports. The goal was to gain a statistical edge on platforms like PrizePicks by identifying 
      undervalued player props.
    </p>
    
    <h2>The Challenge</h2>
    
    <p>
      NBA player performance is highly volatile. The core challenge was filtering out noise to find signal 
      amidst variables like <strong>injuries, minutes restrictions, and defensive matchups</strong>. 
      Simply looking at season averages isn't enough; the model needed to account for recency bias and specific opponent weaknesses.
    </p>
    
    <h2>Technical Implementation</h2>
    
    <p>
      I utilized <strong>Python and Scikit-learn</strong> to build regression models trained on historical game logs. 
      The system automates data collection (using Pandas) to fetch daily matchups and lines, then features engineers 
      critical metrics like "Last 5 Games" (L5) rolling averages and Home/Away splits to feed the predictive model.
    </p>
    
    <h2>Key Features</h2>
    <ul>
      <li><strong>Automated Data Pipeline:</strong> Scripts that scrape or fetch the latest game logs and betting lines daily, cleaning the data with NumPy and Pandas.</li>
      <li><strong>Feature Engineering:</strong> creating custom stats such as "Usage Rate," "Defense vs Position," and rolling averages to improve model accuracy.</li>
      <li><strong>Edge Detection:</strong> The system compares its predicted stat line against the PrizePicks "Over/Under" line to calculate the probability of a hit.</li>
    </ul>
    
    <h2>Results</h2>
    
    <p>
      The project evolved from a simple script into a functional betting assistant that identifies positive expected value (+EV) plays, 
      helping remove emotion from the betting strategy and relying purely on data-driven insights.
    </p>

    <strong> I am still strongly against sports betting and did this for fun to see if it would win more than it would lose. It seems to win more often but there is always risk.</strong>
  `,
},
{
    slug: 'college-express',
    title: 'College Express',
    description: 'An award-winning full-stack platform simplifying college planning.',
    date: '2025', 
    technologies: ['React', 'Node.js', 'AI Integration', 'Full-Stack'],
    link: 'hack-the-hood2025.vercel.app', 
    // github: 'https://github.com/Dawit-Bonga/College_Express', // Update if needed
    content: `
      <p>
        College Express is a full-stack web application designed to democratize access to college guidance. 
        Recognized as an <strong>award-winning project</strong> during the Hack-the-Hood hackathon, it leverages AI to help first-generation and 
        underrepresented students navigate the complex application process.
      </p>
      
      <h2>The Problem</h2>
      <p> I myself am a student who comes from FGLI background so when I was applying to college, there was so much I didn't know and not enough support at my high school for my specific goals.
        High-quality college counseling is often expensive or inaccessible. I wanted to build a scalable solution 
        that could provide personalized roadmaps and essay feedback to students who lack institutional support.
      </p>
      
      <h2>Technical Implementation</h2>
      <p>
        I built the frontend using <strong>React</strong> for a responsive user interface, connected to a backend that integrates 
        generative AI APIs. The system parses user inputs (like GPA, interests, and draft essays) to generate actionable 
        feedback and school recommendations. This feedback is generated using llama-3.3-70b-versatile model and highly tailored prompt engineering to give users a nice and understanable roadmap to help them out. 
      </p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>AI Essay Assistant:</strong> Provides real-time structural feedback and grammar suggestions for personal statements.</li>
        <li><strong>Dynamic Roadmaps:</strong> Generates custom timelines for SATs, applications, and financial aid based on the user's graduation year.</li>
        <li><strong>Resource Hub:</strong> A centralized database of scholarships and guides tailored to first-gen students.</li>
      </ul>
    `,
  },
]

export function getProjects(): Project[] {
  return projects.sort((a, b) => {
    // Sort by date, newest first
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

