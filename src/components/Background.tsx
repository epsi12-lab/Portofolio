import { Briefcase, GraduationCap, type LucideIcon } from 'lucide-react'
import { useI18n } from '../i18n'
import { education, experience, type TimelineItem } from '../content/timeline'
import { ui } from '../content/ui'
import { SectionHead } from './SectionHead'

export function Background() {
  const { t } = useI18n()
  const b = ui.background

  return (
    <section id="parcours" className="section" aria-labelledby="parcours-title">
      <div className="container">
        <SectionHead index="04" eyebrow={t(b.eyebrow)} title={t(b.title)} id="parcours-title">
          {t(b.profile)}
        </SectionHead>

        <div className="timeline-cols">
          <Timeline icon={GraduationCap} title={t(b.education)} items={education} />
          <Timeline icon={Briefcase} title={t(b.experience)} items={experience} />
        </div>
      </div>
    </section>
  )
}

function Timeline({ icon: Icon, title, items }: { icon: LucideIcon; title: string; items: TimelineItem[] }) {
  const { t } = useI18n()
  return (
    <div className="timeline-col">
      <h3 className="timeline-title reveal">
        <span className="icon-tile icon-tile--sm"><Icon size={18} aria-hidden="true" /></span>
        {title}
      </h3>
      <ol className="timeline">
        {items.map((item) => (
          <li key={item.id} className="tl-item reveal" data-current={item.current || undefined}>
            <span className="tl-dot" aria-hidden="true" />
            <div className="tl-card card spot">
              <p className="tl-date">
                {t(item.date)}
                {item.current && <span className="badge">{t(ui.background.current)}</span>}
              </p>
              <h4>{t(item.title)}</h4>
              <p className="tl-org">{t(item.org)}</p>
              {item.detail && <p className="tl-detail">{t(item.detail)}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
