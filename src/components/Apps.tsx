import { useEffect, useState, type CSSProperties } from 'react'
import { site, type SiteApp } from '../content/site.ts'
import { useTheme } from '../ThemeContext.tsx'
import styles from './Apps.module.css'

export function Apps() {
  return (
    <section id="apps" className={styles.section}>
      <div className="wrap">
        <p className="eyebrow">In-house apps</p>
        <h2 className={`display ${styles.title}`}>{site.appsIntro}</h2>
        <ul className={styles.grid}>
          {site.apps.map((app) => (
            <li key={app.id}>
              <AppCard app={app} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function AppCard({ app }: { app: SiteApp }) {
  return (
    <article className={styles.card}>
      <ScreenshotWell app={app} />
      <div className={styles.body}>
        <div className={styles.heading}>
          {app.icon ? (
            <img src={app.icon} alt="" className={styles.icon} />
          ) : null}
          <h3 className={`display ${styles.name}`}>{app.name}</h3>
        </div>
        <p className={styles.pitch}>{app.pitch}</p>
        <ul className={styles.bullets}>
          {app.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="chips" aria-label={`${app.name} platforms`}>
          {app.platforms.map((platform) => {
            const soon = app.platformsSoon?.includes(platform)
            return (
              <li key={platform} className={soon ? `chip ${styles.chipSoon}` : 'chip'}>
                {soon ? `${platform} — coming soon` : platform}
              </li>
            )
          })}
        </ul>
        <StoreLinks app={app} />
      </div>
    </article>
  )
}

function ScreenshotWell({ app }: { app: SiteApp }) {
  const { theme } = useTheme()
  const mark = app.mark ? (theme === 'dark' ? app.mark.dark : app.mark.light) : undefined
  const src = app.screenshot ?? mark
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!src) {
      setLoaded(false)
      return
    }
    let cancelled = false
    setLoaded(false)
    const image = new Image()
    image.onload = () => {
      if (!cancelled) setLoaded(true)
    }
    image.onerror = () => {
      if (!cancelled) setLoaded(false)
    }
    image.src = src
    return () => {
      cancelled = true
    }
  }, [src])

  return (
    <div
      className={mark && !app.screenshot ? `${styles.shot} ${styles.shotMark}` : styles.shot}
      style={{ '--app-accent': app.accent } as CSSProperties}
    >
      {loaded && src ? (
        <img
          src={src}
          alt={app.screenshot ? `${app.name} App Store screenshot` : ''}
        />
      ) : (
        <p className={styles.shotPlaceholder}>App Store screenshots coming soon</p>
      )}
    </div>
  )
}

function StoreLinks({ app }: { app: SiteApp }) {
  return (
    <div className={styles.stores}>
      <StoreLine
        url={app.storeUrl}
        linkLabel={`${app.name} on the App Store`}
        soonLabel="App Store — coming soon"
      />
      {app.platforms.includes('Android') ? (
        <StoreLine
          url={app.playUrl}
          linkLabel={`${app.name} on Google Play`}
          soonLabel="Google Play — coming soon"
        />
      ) : null}
    </div>
  )
}

function StoreLine({
  url,
  linkLabel,
  soonLabel,
}: {
  url?: string
  linkLabel: string
  soonLabel: string
}) {
  if (url) {
    return (
      <a className={styles.store} href={url} target="_blank" rel="noreferrer">
        {linkLabel}
      </a>
    )
  }

  return <p className={styles.soon}>{soonLabel}</p>
}
