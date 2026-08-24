import { useEffect, useState } from 'react'
import { site } from '../content/site.ts'
import { Logo } from './Logo.tsx'
import { ThemeToggle } from './ThemeToggle.tsx'
import styles from './Nav.module.css'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 720) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${open ? styles.menuOpen : ''}`}>
      <div className={`wrap ${styles.bar}`}>
        <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
          <Logo variant="lockup" className={styles.logo} />
        </a>

        <nav id="site-nav" className={styles.nav} aria-label="Primary">
          <ul className={styles.links}>
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.tools}>
          <ThemeToggle />
          <button
            type="button"
            className={styles.menu}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span>{open ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
