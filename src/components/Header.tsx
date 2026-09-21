import { useEffect, useRef, useState } from 'react'
import { Command, Menu, Moon, Sun, X } from 'lucide-react'
import { useI18n } from '../i18n'
import { applyTheme, currentTheme } from '../theme'
import { useActiveSection } from '../hooks'
import { sections } from '../content/site'
import { ui } from '../content/ui'

const sectionIds = sections.map((s) => s.id)

export function Header({ onOpenPalette }: { onOpenPalette: () => void }) {
  const { lang, setLang, t } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMac, setIsMac] = useState(false)
  const themeBtn = useRef<HTMLButtonElement>(null)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    setIsMac(/mac|iphone|ipad/i.test(navigator.platform || navigator.userAgent))
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const toggleTheme = () => {
    const r = themeBtn.current?.getBoundingClientRect()
    applyTheme(currentTheme() === 'dark' ? 'light' : 'dark', r && { x: r.left + r.width / 2, y: r.top + r.height / 2 })
  }

  return (
    <header className="site-header">
      <div className="header-bar">
        <a href="#top" className="brand" aria-label="Bruce TUMPA MADILA">
          <span className="brand-mark" aria-hidden="true">BTM</span>
          <span className="brand-name">Bruce TUMPA MADILA</span>
        </a>

        <nav id="site-nav" className="nav" data-open={menuOpen} aria-label="Navigation">
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} aria-current={active === s.id ? 'true' : undefined} onClick={() => setMenuOpen(false)}>
                  {t(s.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-tools">
          <button type="button" className="tool tool-palette" onClick={onOpenPalette} aria-label={t(ui.paletteOpen)}>
            <Command size={16} aria-hidden="true" />
            <kbd>{isMac ? '⌘' : 'Ctrl'} K</kbd>
          </button>

          <div className="lang-switch" role="group" aria-label={t(ui.langSwitch)}>
            {(['fr', 'en'] as const).map((code) => (
              <button key={code} type="button" lang={code} aria-pressed={lang === code} onClick={() => setLang(code)}>
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button ref={themeBtn} type="button" className="tool theme-toggle" onClick={toggleTheme} aria-label={t(ui.themeToggle)}>
            <Moon size={18} className="icon-moon" aria-hidden="true" />
            <Sun size={18} className="icon-sun" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="tool menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={t(menuOpen ? ui.menuClose : ui.menuOpen)}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
