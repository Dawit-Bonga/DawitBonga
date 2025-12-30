// Work experience data
// To add new experience, simply add a new object to this array

export interface WorkExperience {
  title: string
  company: string
  date: string
  description: string[]
  technologies?: string[]
}

const experiences: WorkExperience[] = [
  {
    title: 'Student Technician',
    company: 'Yale Student Collabrative',
    date: 'Jan 2024 – Present',
    description: [
      'Completed hands-on training program in troubleshooting and repairing computer hardware, gaining proficiency in diagnosing issues with a variety of devices.',
      'Supported 12,000+ Yale students, resolving 25+ issues weekly in Windows, macOS, and Linux systems, including hardware diagnostics, networking, and OS repair.',
    ],
    technologies: ['Windows/macOS/Linux', 'Hardware Diagnostics', 'Network Troubleshooting', 'IT Support'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Amazon AWS',
    date: 'May 2025 – Aug 2025',
    description: [
      'Improved efficiency of ML model deployment testing on AWS by reducing memory usage 60% and accelerating model testing cycles 30% through deployment optimization',
      'Designed and implemented CI/CD integration tests for Bedrock model workflows, increasing release confidence by catching deployment issues before production',
      'Migrated validation workloads from AWS Lambda to AWS Fargate, enabling more comprehensive test coverage and reducing deployment-blocking issues by 15%',
    ],
    technologies: ['AWS Lambda', 'AWS Fargate', 'Amazon Bedrock', 'CI/CD', 'Python', 'Java'],
  },
]

export function getWorkExperience(): WorkExperience[] {
  return experiences.sort((a, b) => {
    // Sort by date, most recent first (simple string comparison for now)
    return b.date.localeCompare(a.date)
  })
}

