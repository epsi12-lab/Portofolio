import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { CornerDownLeft, Download, FileText, Home, Languages, Moon, Search } from 'lucide-react'
import { useI18n } from '../i18n'
import { applyTheme, currentTheme } from '../theme'
import { asset, sections, site } from '../content/site'
import { ui } from '../content/ui'
import { GithubIcon, LinkedinIcon } from './Icons'

type Command = { id: string; group: 'sections' | 'actions' | 'links'; label: string; icon: ReactNode; run: () => void }

const normalize = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

/** Palette de commandes (Ctrl/⌘ + K) : navigation et actions au clavier, dans un <dialog> natif. */
export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lang, setLang, t } = useI18n()
  const p = ui.palette
  const dialog = useRef<HTMLDialogElement>(null)
  const input = useRef<HTMLInputElement>(null)
  const list = useRef<HTMLUListElement>(null)
  const [query, setQuery] = useState('')
  const [cursor, setCursor] = useState(0)

  const commands = useMemo<Command[]>(() => {
    const goto = (hash: string) => () => {
      onClose()
      // Laisse le dialog se fermer avant de faire défiler la page.
      requestAnimationFrame(() => { window.location.hash = hash })
    }
    return [
      { id: 'home', group: 'sections', label: t(p.home), icon: <Home size={16} />, run: goto('top') },
      ...sections.map((s): Command => ({ id: s.id, group: 'sections', label: t(s.label), icon: <FileText size={16} />, run: goto(s.id) })),
      { id: 'cv', group: 'actions', label: t(p.cv), icon: <Download size={16} />, run: () => { onClose(); window.open(asset(site.cv), '_blank', 'noopener') } },
      { id: 'theme', group: 'actions', label: t(p.theme), icon: <Moon size={16} />, run: () => { onClose(); applyTheme(currentTheme() === 'dark' ? 'light' : 'dark') } },
      { id: 'lang', group: 'actions', label: t(p.lang), icon: <Languages size={16} />, run: () => { setLang(lang === 'fr' ? 'en' : 'fr'); onClose() } },
      { id: 'linkedin', group: 'links', label: 'LinkedIn', icon: <LinkedinIcon />, run: () => { onClose(); window.open(site.linkedin, '_blank', 'noopener') } },
      { id: 'github', group: 'links', label: 'GitHub', icon: <GithubIcon />, run: () => { onClose(); window.open(site.github, '_blank', 'noopener') } },
    ]
  }, [t, p, lang, setLang, onClose])

  const results = useMemo(() => {
    const q = normalize(query.trim())
    return q ? commands.filter((c) => normalize(c.label).includes(q)) : commands
  }, [commands, query])

  useEffect(() => {
    const el = dialog.current
    if (!el) return
    if (open && !el.open) {
      setQuery('')
      setCursor(0)
      el.showModal()
      input.current?.focus()
    } else if (!open && el.open) {
      el.close()
    }
  }, [open])

  useEffect(() => { setCursor(0) }, [query])

  useEffect(() => {
    list.current?.querySelector<HTMLElement>('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' })
  }, [cursor, results])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setCursor((c) => Math.min(c + 1, results.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setCursor((c) => Math.max(c - 1, 0)) }
    else if (e.key === 'Enter') { e.preventDefault(); results[cursor]?.run() }
  }

  const groupLabel = { sections: p.sections, actions: p.actions, links: p.links }

  return (
    <dialog
      ref={dialog}
      className="palette"
      aria-label={t(ui.paletteOpen)}
      onClose={onClose}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="palette-box" onKeyDown={onKeyDown}>
        <label className="palette-search">
          <Search size={18} aria-hidden="true" />
          <input
            ref={input}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[cursor] ? `cmd-${results[cursor].id}` : undefined}
            autoComplete="off"
            spellCheck={false}
            placeholder={t(p.placeholder)}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd>esc</kbd>
        </label>

        <ul ref={list} id="palette-list" role="listbox" className="palette-list">
          {results.length === 0 && <li className="palette-empty">{t(p.empty)}</li>}
          {results.map((c, i) => {
            const startsGroup = i === 0 || results[i - 1].group !== c.group
            return (
              <li key={c.id} role="presentation">
                {startsGroup && <p className="palette-group">{t(groupLabel[c.group])}</p>}
                <div
                  id={`cmd-${c.id}`}
                  role="option"
                  aria-selected={i === cursor}
                  className="palette-item"
                  onPointerMove={() => setCursor(i)}
                  onClick={c.run}
                >
                  <span className="palette-icon" aria-hidden="true">{c.icon}</span>
                  <span>{c.label}</span>
                  {i === cursor && <CornerDownLeft size={14} className="palette-enter" aria-hidden="true" />}
                </div>
              </li>
            )
          })}
        </ul>

        <p className="palette-hint">{t(p.hint)}</p>
      </div>
    </dialog>
  )
}
