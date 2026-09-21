import { BookOpen, Bug, CalendarRange, ClipboardCheck, Lightbulb, MapPin, Rocket, Route, type LucideIcon } from 'lucide-react'
import { useI18n } from '../i18n'
import { missions, type MissionIcon } from '../content/mission'
import { ui } from '../content/ui'
import { SectionHead } from './SectionHead'

const icons: Record<MissionIcon, LucideIcon> = {
  needs: Lightbulb,
  recette: ClipboardCheck,
  bug: Bug,
  planning: CalendarRange,
  docs: BookOpen,
  rollout: Rocket,
}

export function Alternance() {
  const { t } = useI18n()
  const { alternance: a } = ui

  return (
    <section id="alternance" className="section" aria-labelledby="alternance-title">
      <div className="container">
        <SectionHead index="01" eyebrow={t(a.eyebrow)} title={t(a.title)} id="alternance-title">
          {t(a.intro)}
        </SectionHead>

        <ul className="meta-row reveal" aria-label={t(a.role)}>
          <li className="chip chip--accent"><Route size={14} aria-hidden="true" />{t(a.role)}</li>
          <li className="chip"><MapPin size={14} aria-hidden="true" />Garges-lès-Gonesse (95)</li>
        </ul>

        <ol className="mission-grid">
          {missions.map((m, i) => {
            const Icon = icons[m.icon]
            return (
              <li key={m.icon} className="mission card spot reveal">
                <div className="mission-top">
                  <span className="icon-tile"><Icon size={22} aria-hidden="true" /></span>
                  <span className="mission-step">{t(a.step)} {String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{t(m.title)}</h3>
                <p>{t(m.body)}</p>
              </li>
            )
          })}
        </ol>

        <p className="fineprint reveal">{t(a.note)}</p>
      </div>
    </section>
  )
}
