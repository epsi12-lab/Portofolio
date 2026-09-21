import { ArrowUp } from 'lucide-react'
import { useI18n } from '../i18n'
import { site } from '../content/site'
import { ui } from '../content/ui'
import { GithubIcon, LinkedinIcon } from './Icons'

export function Footer() {
  const { t } = useI18n()
  const f = ui.footer

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p>&copy; 2026 {site.name}. {t(f.rights)}</p>
          <p className="fineprint">{t(ui.alternance.note)}</p>
          <p className="fineprint">{t(f.built)}</p>
        </div>
        <div className="footer-links">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
          <a href="#top" className="to-top"><ArrowUp size={16} aria-hidden="true" />{t(f.top)}</a>
        </div>
      </div>
    </footer>
  )
}
