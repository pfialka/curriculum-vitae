import type { CvEmployer } from '../data/cv'

type Props = { employers: CvEmployer[] }

export function ExperienceList({ employers }: Props) {
  return (
    <ul className="cv-employers">
      {employers.map((employer) => (
        <li
          key={employer.company}
          className="cv-employer"
        >
          <div className="cv-employer__header">
            <span className="cv-employer__name">{employer.company}</span>
            {employer.companyPeriod && (
              <span className="cv-employer__period">{employer.companyPeriod}</span>
            )}
          </div>
          <ul className="cv-employer__roles">
            {employer.roles.map((role) => (
              <li
                key={`${employer.company}-${role.title}-${role.period}`}
                className="cv-role"
              >
                <div className="cv-role__head">
                  <h3 className="cv-role__title">{role.title}</h3>
                  <span className="cv-role__period">{role.period}</span>
                </div>
                <ul className="cv-bullets">
                  {role.bullets.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
