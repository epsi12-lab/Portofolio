import { useState, type FormEvent } from 'react'
import { CheckCircle2, AlertCircle, MapPin, Send } from 'lucide-react'
import { useI18n } from '../i18n'
import { site } from '../content/site'
import { ui } from '../content/ui'
import { SectionHead } from './SectionHead'
import { GithubIcon, LinkedinIcon } from './Icons'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const { t } = useI18n()
  const c = ui.contact
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div>
          <SectionHead index="05" eyebrow={t(c.eyebrow)} title={t(c.title)} id="contact-title">
            {t(c.intro)}
          </SectionHead>

          <ul className="contact-links reveal">
            <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon />LinkedIn</a></li>
            <li><a href={site.github} target="_blank" rel="noopener noreferrer"><GithubIcon />GitHub</a></li>
            <li className="contact-loc"><MapPin size={18} aria-hidden="true" />{t(c.based)}</li>
          </ul>
        </div>

        <form className="contact-form card reveal" onSubmit={onSubmit} aria-busy={status === 'sending'}>
          <div className="field">
            <label htmlFor="cf-name">{t(c.name)}</label>
            <input id="cf-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="cf-email">{t(c.email)}</label>
            <input id="cf-email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="cf-subject">{t(c.subject)}</label>
            <input id="cf-subject" name="_subject" type="text" required />
          </div>
          <div className="field">
            <label htmlFor="cf-message">{t(c.message)}</label>
            <textarea id="cf-message" name="message" rows={5} required />
          </div>
          {/* Champ piège anti-spam (Formspree ignore les envois où il est rempli). */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            <Send size={18} aria-hidden="true" />
            {t(status === 'sending' ? c.sending : c.send)}
          </button>

          <p className="form-status" role="status" aria-live="polite" data-state={status}>
            {status === 'success' && <><CheckCircle2 size={18} aria-hidden="true" />{t(c.success)}</>}
            {status === 'error' && <><AlertCircle size={18} aria-hidden="true" />{t(c.error)}</>}
          </p>
        </form>
      </div>
    </section>
  )
}
