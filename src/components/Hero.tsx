import { site } from '../content/site.ts'
import { Logo } from './Logo.tsx'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <Logo variant="mark" className={styles.watermark} alt="" aria-hidden="true" />
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.lockup}>
          <Logo variant="lockup" className={styles.lockupImg} />
        </div>
        <p className="eyebrow">Software studio</p>
        <h1 className={`display ${styles.title}`}>{site.tagline}</h1>
        <p className={`lede ${styles.lede}`}>{site.description}</p>
        <div className={styles.actions}>
          <a className="btn btnPrimary" href="#contact">
            Start a conversation
          </a>
          <a className="btn btnGhost" href="#apps">
            See the apps
          </a>
        </div>
      </div>
    </section>
  )
}
