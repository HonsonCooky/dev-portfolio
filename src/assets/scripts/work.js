export const experiences = [
  {
    title: 'Software Engineer',
    company: 'Splitting Point Studios',
    dates: 'Sept 2025 - Now',
    location: 'Remote, NZ',
    points: [
      'Ongoing',
      "Engineering the debut of a dream - transforming a spark of imagination into something the world's never laid eyes on.",
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Xero',
    dates: 'Aug 2024 - Sept 2025',
    location: 'Wellington, NZ',
    points: [
      '1 year, 1 month',
      'Maintained and extended critical legacy IIS applications, reverse-engineering undocumented workflows to deliver new features without disrupting business operations.',
      'Aided in the design of migration procedures and components for a modern replacement platform, working in parallel with legacy maintenance to streamline eventual cutover.',
      'Served as on-call engineer for high-impact production incidents across systems outside core squad scope - triaging, resolving, or escalating to restore service.',
      'Balanced development responsibilities with operational duties in a fast-paced, multi-system environment.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Z Energy',
    dates: 'Nov 2021 - Aug 2024',
    location: 'Wellington, NZ',
    points: [
      '2 years, 9 months',
      'Maintained and enhanced a distributed microservices ecosystem processing millions of daily requests, ensuring services stayed secure, stable, and up-to-date with the latest libraries.',
      'Built integrations with multiple third-party vendors and legacy platforms, implementing robust data migration pipelines to standardise and transform incoming datasets.',
      'Delivered code to production with a focus on reliability, maintainability, and compliance, while executing against existing architecture and design specifications.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Raygun',
    dates: 'Nov 2020 - Feb 2021',
    location: 'Wellington, NZ',
    points: [
      '3 months',
      "Designed, developed, and published a React Native NPM library, streamlining integration with Raygun's crash reporting and monitoring software.",
      'Gained hands-on experience in the full lifecycle of software library production, including development, packaging, and distribution, now applied in building internal frameworks.',
      'Transitioned from academic learning to practical industry development, collaborating in a professional software environment to deliver impactful solutions.',
    ],
  },
]

const start = new Date('2021/08/01') // Account for 3 months at Raygun
const years = ((new Date() - start) / (1000 * 60 * 60 * 24 * 365)).toFixed(2)

export function workYearsRounded() {
  const roundedYears = Math.round(years * 2) / 2
  if (roundedYears > years) return `~${roundedYears}`
  return `${roundedYears}+`
}
