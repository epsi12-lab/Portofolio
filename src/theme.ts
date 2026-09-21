import { flushSync } from 'react-dom'

export type Theme = 'light' | 'dark'

export const currentTheme = (): Theme =>
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'

/**
 * Change le thème. Quand le navigateur supporte les View Transitions, le nouveau thème
 * « se déploie » en cercle depuis le point d'origine (bouton ou centre de l'écran).
 */
export function applyTheme(next: Theme, origin?: { x: number; y: number }, onApplied?: (t: Theme) => void) {
  const commit = () => {
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch { /* ignore */ }
    onApplied?.(next)
  }

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!document.startViewTransition || reduce) {
    commit()
    return
  }

  const x = origin?.x ?? window.innerWidth / 2
  const y = origin?.y ?? window.innerHeight / 2
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

  const transition = document.startViewTransition(() => flushSync(commit))
  transition.ready.then(() => {
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 650, easing: 'cubic-bezier(.65,0,.35,1)', pseudoElement: '::view-transition-new(root)' },
    )
  }).catch(() => { /* transition annulée */ })
}
