import { site } from '../content/site.ts'
import { Logo } from './Logo.tsx'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.bar}`}>
        <div className={styles.mark}>
          <Logo variant="mark" className={styles.logo} />
        </div>
        <nav aria-label="Footer">
          <ul className={styles.links}>
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.copy}>
          © {year} {site.name}
        </p>
      </div>
    </footer>
  )
}
