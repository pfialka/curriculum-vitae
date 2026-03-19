import type { CvSkillGroup } from '../data/cv'

type Props = { groups: CvSkillGroup[] }

export function Skills({ groups }: Props) {
  return (
    <div className="cv-skills">
      {groups.map((group) => (
        <div key={group.title} className="cv-skills__group">
          <h3 className="cv-skills__title">{group.title}</h3>
          <ul className="cv-skills__tags">
            {group.items.map((item) => (
              <li
                key={`${group.title}-${item.label}`}
                className={
                  item.secondary
                    ? 'cv-skills__tag cv-skills__tag--secondary'
                    : 'cv-skills__tag'
                }
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
