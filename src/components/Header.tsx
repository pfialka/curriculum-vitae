import type { CvContact, CvData } from '../data/cv'

type Props = Pick<CvData, 'name' | 'headline' | 'summary'> & { contact: CvContact }

export function Header({ name, headline, summary, contact }: Props) {
  return (
    <header className="cv-header">
      <div className="cv-header__top">
        <div>
          <h1 className="cv-header__name">{name}</h1>
          <p className="cv-header__headline">{headline}</p>
        </div>
        <ul className="cv-contact" aria-label="Kontakt">
          {contact.email && (
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
          )}
          {contact.phone && <li>{contact.phone}</li>}
          {contact.location && <li>{contact.location}</li>}
          {contact.links?.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer noopener">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="cv-header__summary">{summary}</p>
    </header>
  )
}
