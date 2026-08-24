import { site } from '../content/site.ts'
import styles from './Work.module.css'

export function Work() {
  const { work } = site

  return (
    <section id="work" className={styles.section}>
      <div className="wrap">
        <p className="eyebrow">{work.eyebrow}</p>
        <article className={styles.panel}>
          <div className={styles.copy}>
            <p className={styles.role}>{work.role}</p>
            <h2 className={styles.heading}>
              <img src={work.logo} alt={work.name} className={styles.logo} />
            </h2>
            <p className={styles.summary}>{work.summary}</p>
            <p className={styles.body}>{work.body}</p>
          </div>
          <div className={styles.meta}>
            <ul className={styles.highlights}>
              {work.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="chips" aria-label="Stack">
              {work.stack.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}
