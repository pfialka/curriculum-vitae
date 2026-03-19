import type { CvLanguage } from '../data/cv'

type Props = { items: CvLanguage[] }

export function Languages({ items }: Props) {
  return (
    <ul className="cv-languages">
      {items.map((lang) => (
        <li key={lang.name}>
          <span className="cv-languages__name">{lang.name}</span>
          <span className="cv-languages__level">{lang.level}</span>
        </li>
      ))}
    </ul>
  )
}
