import type { ReactNode } from 'react'

type Props = {
  id: string
  title: string
  children: ReactNode
  prominent?: boolean
}

export function CvSection({ id, title, children, prominent }: Props) {
  return (
    <section
      className={prominent ? 'cv-section cv-section--prominent' : 'cv-section'}
      id={id}
      aria-labelledby={`${id}-heading`}
    >
      <h2 className="cv-section__title" id={`${id}-heading`}>
        {title}
      </h2>
      <div className="cv-section__body">{children}</div>
    </section>
  )
}
