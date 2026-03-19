import type { CvEducation } from '../data/cv'

type Props = { items: CvEducation[] }

export function EducationList({ items }: Props) {
  return (
    <ul className="cv-education">
      {items.map((edu) => (
        <li key={`${edu.school}-${edu.period}`}>
          <span className="cv-education__period">{edu.period}</span>
          <span className="cv-education__degree">{edu.degree}</span>
          <span className="cv-education__school">{edu.school}</span>
        </li>
      ))}
    </ul>
  )
}
