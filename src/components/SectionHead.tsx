import type { ReactNode } from 'react'

type Props = { index: string; eyebrow: string; title: string; children?: ReactNode; id?: string }

export function SectionHead({ index, eyebrow, title, children, id }: Props) {
  return (
    <header className="section-head reveal">
      <p className="eyebrow"><span className="eyebrow-index">{index}</span>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </header>
  )
}
