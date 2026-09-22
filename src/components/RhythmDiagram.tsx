import { useI18n } from '../i18n'
import { ui } from '../content/ui'

/** Nombre de blocs de 15 jours affichés (4 cycles complets = 2 mois). */
const CYCLES = 4

/**
 * Frise visuelle du rythme d'alternance (15 j entreprise / 15 j université).
 * Volontairement statique : un indicateur « en direct » exigerait une date de
 * référence fiable et se tromperait aux vacances ou jours fériés.
 */
export function RhythmDiagram() {
  const { t } = useI18n()
  const r = ui.alternance.rhythm

  const segments: Array<'company' | 'school'> = Array.from({ length: CYCLES * 2 }, (_, i) => (i % 2 === 0 ? 'company' : 'school'))

  return (
    <div className="rhythm reveal">
      <p className="rhythm-label">{t(r.label)}</p>
      <div className="rhythm-track" role="img" aria-label={t(r.aria)}>
        {segments.map((kind, i) => (
          <span key={i} className={`rhythm-seg rhythm-seg--${kind}`} aria-hidden="true" />
        ))}
      </div>
      <ul className="rhythm-legend">
        <li><span className="rhythm-dot rhythm-dot--company" aria-hidden="true" />{t(r.company)}</li>
        <li><span className="rhythm-dot rhythm-dot--school" aria-hidden="true" />{t(r.school)}</li>
      </ul>
    </div>
  )
}
