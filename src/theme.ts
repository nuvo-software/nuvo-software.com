export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'nuvo-theme'

export function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value === 'light' || value === 'dark') return value
  } catch {
    /* private mode */
  }
  return null
}

export function preferredTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  const meta = document.querySelector('meta[name="theme-color"]')
  meta?.setAttribute('content', theme === 'dark' ? '#003c3e' : '#f4fbfc')
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    /* private mode */
  }
}

export function resolveTheme(): Theme {
  return readStoredTheme() ?? preferredTheme()
}
