import { useTheme } from '../ThemeContext.tsx'
import styles from './ThemeToggle.module.css'

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
      <path
        fill="currentColor"
        d="M21 14.55A9 9 0 0 1 9.45 3 7.2 7.2 0 1 0 21 14.55Z"
      />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" fill="none">
        <path d="M12 3.2v2.1M12 18.7v2.1M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M3.2 12h2.1M18.7 12h2.1M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5" />
      </g>
    </svg>
  )
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label={`Switch to ${next} theme`}
      onClick={() => setTheme(next)}
    >
      {next === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
