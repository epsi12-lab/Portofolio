import { useCallback, useEffect, useState } from 'react'
import { I18nProvider, useI18n } from './i18n'
import { useSpotlight } from './hooks'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Alternance } from './components/Alternance'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Background } from './components/Background'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CommandPalette } from './components/CommandPalette'
import { ui } from './content/ui'

function Shell() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  const closePalette = useCallback(() => setPaletteOpen(false), [])
  const { t } = useI18n()
  useSpotlight()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((v) => !v)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">{t(ui.skip)}</a>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="scene" aria-hidden="true">
        <span className="scene-blob scene-blob--1" />
        <span className="scene-blob scene-blob--2" />
        <span className="scene-blob scene-blob--3" />
        <span className="scene-grid" />
      </div>

      <Header onOpenPalette={() => setPaletteOpen(true)} />
      <main id="main">
        <Hero />
        <Alternance />
        <Projects />
        <Skills />
        <Background />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={closePalette} />
    </>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <Shell />
    </I18nProvider>
  )
}
