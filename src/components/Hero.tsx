import { ArrowDown, Download } from 'lucide-react'
import { useI18n } from '../i18n'
import { asset, site } from '../content/site'
import { ui } from '../content/ui'

export function Hero() {
  const { t } = useI18n()
  const { hero } = ui

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="status-pill">
            <span className="pulse" aria-hidden="true" />
            {t(hero.status)}
          </p>
          <h1 id="hero-title" className="hero-title">
            <span className="hero-title-first">Bruce</span>{' '}
            <span className="hero-title-last">TUMPA MADILA</span>
          </h1>
          <p className="hero-lead">{t(hero.lead)}</p>

          <div className="hero-cta">
            <a href="#projets" className="btn btn-primary">
              {t(hero.ctaProjects)}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a href={asset(site.cv)} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              <Download size={18} aria-hidden="true" />
              {t(hero.ctaCv)}
            </a>
          </div>

          <dl className="hero-facts">
            {hero.facts.map((f) => (
              <div key={f.label.fr} className="fact">
                <dt>{t(f.label)}</dt>
                <dd>{t(f.value)}</dd>
                <dd className="fact-sub">{t(f.sub)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual">
          <figure className="portrait">
            <img
              src={asset('images/profil.webp')}
              alt={t(hero.photoAlt)}
              width={760}
              height={1351}
              fetchPriority="high"
              decoding="async"
            />
          </figure>
          <span className="float-chip float-chip--a">MIAGE · UHA</span>
          <span className="float-chip float-chip--b">CNP Assurances</span>
        </div>
      </div>
    </section>
  )
}
