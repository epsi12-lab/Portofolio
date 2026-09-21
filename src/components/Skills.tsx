import { BarChart3, Code2, Database, Languages, Network, Radar, Server, ShieldCheck, Sprout, SquareKanban, type LucideIcon } from 'lucide-react'
import { useI18n } from '../i18n'
import { skillGroups, softSkills, type SkillIcon } from '../content/skills'
import { ui } from '../content/ui'
import { SectionHead } from './SectionHead'

const icons: Record<SkillIcon, LucideIcon> = {
  project: SquareKanban,
  security: ShieldCheck,
  network: Network,
  code: Code2,
  data: BarChart3,
  database: Database,
  systems: Server,
  learning: Sprout,
  watch: Radar,
  lang: Languages,
}

export function Skills() {
  const { t } = useI18n()
  const s = ui.skills

  return (
    <section id="competences" className="section" aria-labelledby="competences-title">
      <div className="container">
        <SectionHead index="03" eyebrow={t(s.eyebrow)} title={t(s.title)} id="competences-title">
          {t(s.intro)}
        </SectionHead>

        <ul className="skill-grid">
          {skillGroups.map((g) => {
            const Icon = icons[g.icon]
            return (
              <li key={g.id} className={`skill card spot reveal span-${g.span ?? 4}`}>
                <h3>
                  <span className="icon-tile icon-tile--sm"><Icon size={18} aria-hidden="true" /></span>
                  {t(g.title)}
                </h3>
                <ul className="tags">
                  {g.items.map((item, i) => {
                    const label = typeof item === 'string' ? item : t(item)
                    return <li key={`${g.id}-${i}`} className="chip">{label}</li>
                  })}
                </ul>
              </li>
            )
          })}
        </ul>

        <div className="soft reveal">
          <h3 className="soft-title">{t(s.soft)}</h3>
          <ul className="tags">
            {softSkills.map((k) => <li key={k.fr} className="chip chip--soft">{t(k)}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
