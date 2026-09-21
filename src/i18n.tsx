import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Lang = 'fr' | 'en'
/** Texte localisé : chaque contenu du site existe en FR et en EN. */
export type L = Record<Lang, string>
export type LList = Record<Lang, string[]>

export const l = (fr: string, en: string): L => ({ fr, en })

type I18n = {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Résout un texte localisé dans la langue courante. */
  t: (text: L) => string
  tl: (list: LList) => string[]
}

const Ctx = createContext<I18n | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  // Toujours 'fr' au premier rendu (= HTML prérendu), puis la préférence est appliquée après l'hydratation.
  const [lang, setLangState] = useState<Lang>('fr')

  useEffect(() => {
    let saved: string | null = null
    try { saved = localStorage.getItem('language') } catch { /* stockage indisponible */ }
    const wanted: Lang = saved === 'fr' || saved === 'en'
      ? saved
      : navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
    setLangState(wanted)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try { localStorage.setItem('language', next) } catch { /* ignore */ }
  }, [])

  const value = useMemo<I18n>(() => ({
    lang,
    setLang,
    t: (text) => text[lang],
    tl: (list) => list[lang],
  }), [lang, setLang])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useI18n(): I18n {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useI18n doit être utilisé dans <I18nProvider>')
  return ctx
}
