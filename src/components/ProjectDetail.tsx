import { useEffect, useRef, type MouseEvent } from 'react'
import { ArrowUpRight, Images, Target, X } from 'lucide-react'
import { useI18n } from '../i18n'
import { ui } from '../content/ui'
import { categoryLabels, type Project } from '../content/projects'
import { GithubIcon } from './Icons'

type Props = {
  project: Project | null
  onClose: () => void
  /** Ouvre la galerie plein écran de ce projet (le panneau se ferme d'abord). */
  onOpenGallery: (id: string) => void
}

/** Panneau « En savoir plus » : contexte, approche et points sourcés d'un projet, dans un <dialog> natif. */
export function ProjectDetail({ project, onClose, onOpenGallery }: Props) {
  const { t } = useI18n()
  const p = ui.projects
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    else if (!project && dialog.open) dialog.close()
  }, [project])

  const onBackdrop = (e: MouseEvent<HTMLDialogElement>) => { if (e.target === e.currentTarget) onClose() }
  const detail = project?.detail

  return (
    <dialog ref={ref} className="detail" aria-labelledby="detail-title" onClose={onClose} onClick={onBackdrop}>
      {project && detail && (
        <div className="detail-body">
          <header className="detail-head">
            <div>
              <p className="detail-cat">
                {t(categoryLabels[project.category])}
                {project.period && ` · ${project.period}`}
              </p>
              <h3 id="detail-title">{t(project.title)}</h3>
            </div>
            <button type="button" className="tool" onClick={onClose} aria-label={t(p.close)}>
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          <div className="detail-scroll">
            <section className="detail-section">
              <h4>{t(p.context)}</h4>
              <p>{t(detail.context)}</p>
            </section>

            <section className="detail-section">
              <h4>{t(p.approach)}</h4>
              <p>{t(detail.approach)}</p>
            </section>

            {detail.points && (
              <ul className="detail-points">
                {detail.points.map((point, i) => <li key={i}>{t(point)}</li>)}
              </ul>
            )}

            {project.outcome && (
              <p className="outcome">
                <Target size={16} aria-hidden="true" />
                <span><strong>{t(p.result)}.</strong> {t(project.outcome)}</span>
              </p>
            )}

            {detail.note && <p className="detail-note">{t(detail.note)}</p>}

            {project.gallery && (
              <button type="button" className="detail-gallery-trigger" onClick={() => onOpenGallery(project.id)}>
                <Images size={16} aria-hidden="true" />
                {t(p.seeCaptures)}
                <span className="filter-count">{project.gallery.length}</span>
              </button>
            )}
          </div>

          {(project.live || project.code) && (
            <footer className="detail-actions">
              {project.live && (
                <a className="btn btn-primary" href={project.live} target="_blank" rel="noopener noreferrer">
                  {t(p.live)} <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
              {project.code && (
                <a className="btn btn-ghost" href={project.code} target="_blank" rel="noopener noreferrer">
                  <GithubIcon /> {t(p.code)}
                </a>
              )}
            </footer>
          )}
        </div>
      )}
    </dialog>
  )
}
