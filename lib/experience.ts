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
    title: 'Software Engineering Intern',
    company: 'Amazon AWS',
    date: 'May 2025 – Aug 2025',
    description: [
      'Built ML model loading pipeline via 4-bit quantization, cutting memory usage 60% and accelerating validation workflows.',
      'Implemented CI/CD integration tests in java for Bedrock model workflows, catching pre-production deployment issues',
      'Migrated validation workloads to AWS Fargate, expanding test coverage and reducing deployment-blocking issues by 30%',
    ],
    technologies: ['AWS Lambda', 'AWS Fargate', 'Amazon Bedrock', 'CI/CD', 'Python', 'Java'],
  },
    {
    title: 'Undergraduate Research Assistant',
    company: 'Yale Interactive Machines Group',
    date: 'Dec 2025 – Present',
    description: [
      'Selected for an NSF-funded CAREER project deploying a public-facing social robot at the Yale Peabody Museum',
      'Designed and implemented a ROS2-based ZED camera pipeline enabling real-time proximity tracking for live interactions',
      'Led hardware upgrades for robot systems, improving stability and readiness for public museum deployment ',
      'Built ROS2 testing and data recording pipelines, ensuring reliable performance under real-world deployment conditions',
    ],
    technologies: ['Python', 'C++', 'Ubunto', 'Robot Operating System'],
  },
  {
    title: 'Student Technician',
    company: 'Yale Student Collabrative',
    date: 'Oct 2024 – Present',
    description: [
      'Completed hands-on training program in troubleshooting and repairing computer hardware, gaining proficiency in diagnosing issues with a variety of devices.',
      'Supported 12,000+ Yale students, resolving 25+ issues weekly in Windows, macOS, and Linux systems, including hardware diagnostics, networking, and OS repair.',
    ],
    technologies: ['Windows/macOS/Linux', 'Hardware Diagnostics', 'Network Troubleshooting', 'IT Support'],
  },
]

export function getWorkExperience(): WorkExperience[] {
  // return experiences.sort((a, b) => {
  //   // Sort by date, most recent first (simple string comparison for now)
  //   return b.date.localeCompare(a.date)
  // })

  return experiences;
}

