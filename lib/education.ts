// Education data
// To add new education, simply add a new object to this array

export interface Education {
  degree: string
  school: string
  date: string
  description?: string[]
  gpa?: string
  coursework?: string[]
}

const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Yale University',
    date: '2024 – 2028',
    gpa: '3.71',
    description: [
      'Clubs: ColorStack, Code Haven, NSBE, Yale Undergraduate Prison Project',
    ],
    coursework: [
      'Data Structures',
      'Algorithms',
      'Systems Programming and Computer Organization',
      'Discrete Mathematics',
      'Probability Theory',
      "Automated Decision Systems"
    ],
  },
]

export function getEducation(): Education[] {
  return education.sort((a, b) => {
    // Sort by date, most recent first
    return b.date.localeCompare(a.date)
  })
}

