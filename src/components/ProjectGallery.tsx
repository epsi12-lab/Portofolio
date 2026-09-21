import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useI18n } from '../i18n'
import { asset } from '../content/site'
import { ui } from '../content/ui'
import type { Project } from '../content/projects'

/** Visionneuse de captures dans un <dialog> natif (focus piégé, Échap et backdrop gérés par le navigateur). */
export function ProjectGallery({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { t } = useI18n()
  const p = ui.projects
  const ref = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState(0)
  const shots = project?.gallery ?? []

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (project && !dialog.open) {
      setIndex(0)
      dialog.showModal()
    } else if (!project && dialog.open) {
      dialog.close()
    }
  }, [project])

  const go = (delta: number) => setIndex((i) => (i + delta + shots.length) % shots.length)

  const onKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
  }
  const onBackdrop = (e: MouseEvent<HTMLDialogElement>) => { if (e.target === e.currentTarget) onClose() }

  const shot = shots[index]

  return (
    <dialog ref={ref} className="gallery" aria-labelledby="gallery-title" onClose={onClose} onClick={onBackdrop} onKeyDown={onKeyDown}>
      {project && shot && (
        <div className="gallery-body">
          <header className="gallery-head">
            <div>
              <h3 id="gallery-title">{t(project.title)}</h3>
              <p className="gallery-count" aria-live="polite">{index + 1} {t(p.of)} {shots.length} · {t(shot.caption)}</p>
            </div>
            <button type="button" className="tool" onClick={onClose} aria-label={t(p.close)}>
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          <div className="gallery-stage">
            {shots.length > 1 && (
              <button type="button" className="tool gallery-nav gallery-nav--prev" onClick={() => go(-1)} aria-label={t(p.prev)}>
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
            )}
            <img key={shot.src} src={asset(shot.src)} alt={t(shot.alt)} width={shot.width} height={shot.height} />
            {shots.length > 1 && (
              <button type="button" className="tool gallery-nav gallery-nav--next" onClick={() => go(1)} aria-label={t(p.next)}>
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            )}
          </div>

          {shots.length > 1 && (
            <ul className="gallery-thumbs">
              {shots.map((s, i) => (
                <li key={s.src}>
                  <button type="button" aria-current={i === index} aria-label={t(s.caption)} onClick={() => setIndex(i)}>
                    <img src={asset(s.src)} alt="" width={s.width} height={s.height} loading="lazy" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </dialog>
  )
}
