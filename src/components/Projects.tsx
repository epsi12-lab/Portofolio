import { useState } from 'react'
import { ArrowUpRight, Images, Target } from 'lucide-react'
import { useI18n } from '../i18n'
import { categoryLabels, projects, type Project, type ProjectCategory } from '../content/projects'
import { ui } from '../content/ui'
import { SectionHead } from './SectionHead'
import { ProjectGallery } from './ProjectGallery'
import { GithubIcon } from './Icons'

type Filter = 'all' | ProjectCategory
const filters: Filter[] = ['all', 'dev', 'data', 'network']

export function Projects() {
  const { t } = useI18n()
  const p = ui.projects
  const [filter, setFilter] = useState<Filter>('all')
  const [openId, setOpenId] = useState<string | null>(null)

  const shown = projects.filter((x) => filter === 'all' || x.category === filter)
  const count = (f: Filter) => (f === 'all' ? projects.length : projects.filter((x) => x.category === f).length)
  const opened = projects.find((x) => x.id === openId) ?? null

  return (
    <section id="projets" className="section" aria-labelledby="projets-title">
      <div className="container">
        <SectionHead index="02" eyebrow={t(p.eyebrow)} title={t(p.title)} id="projets-title">
          {t(p.intro)}
        </SectionHead>

        <div className="filters reveal" role="group" aria-label="Filtrer les projets">
          {filters.map((f) => (
            <button key={f} type="button" className="filter" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f === 'all' ? t(p.all) : t(categoryLabels[f])}
              <span className="filter-count">{count(f)}</span>
            </button>
          ))}
        </div>

        <ul className="project-grid">
          {shown.map((project) => (
            <li key={project.id} className="project-item">
              <ProjectCard project={project} onOpenGallery={() => setOpenId(project.id)} />
            </li>
          ))}
        </ul>
      </div>

      <ProjectGallery project={opened} onClose={() => setOpenId(null)} />
    </section>
  )
}

function ProjectCard({ project, onOpenGallery }: { project: Project; onOpenGallery: () => void }) {
  const { t } = useI18n()
  const p = ui.projects

  return (
    <article className="project card spot" data-category={project.category}>
      <div className="project-meta">
        <span className="project-cat">{t(categoryLabels[project.category])}</span>
        {project.period && <span className="project-period">{project.period}</span>}
        {project.inProgress && <span className="badge">{t(p.inProgress)}</span>}
      </div>

      <h3>{t(project.title)}</h3>
      <p className="project-summary">{t(project.summary)}</p>

      {project.outcome && (
        <p className="outcome">
          <Target size={16} aria-hidden="true" />
          <span><strong>{t(p.result)}.</strong> {t(project.outcome)}</span>
        </p>
      )}

      <ul className="tags" aria-label="Technologies">
        {project.tags.map((tag) => <li key={tag} className="chip">{tag}</li>)}
      </ul>

      {(project.live || project.code || project.gallery || project.privateRepo) && <div className="project-actions">
        {project.live && (
          <a className="link-action" href={project.live} target="_blank" rel="noopener noreferrer">
            {t(p.live)} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
        {project.code && (
          <a className="link-action" href={project.code} target="_blank" rel="noopener noreferrer">
            <GithubIcon /> {t(p.code)}
          </a>
        )}
        {project.gallery && (
          <button type="button" className="link-action" onClick={onOpenGallery} aria-haspopup="dialog">
            <Images size={16} aria-hidden="true" /> {t(p.captures)}
            <span className="filter-count">{project.gallery.length}</span>
          </button>
        )}
        {project.privateRepo && <span className="link-muted">{t(p.privateRepo)}</span>}
      </div>}
    </article>
  )
}
