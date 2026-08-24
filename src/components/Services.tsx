import { site } from '../content/site.ts'
import styles from './Services.module.css'

export function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="wrap">
        <p className="eyebrow">Services</p>
        <h2 className={`display ${styles.title}`}>A product partner, not a ticket queue.</h2>
        <ul className={styles.grid}>
          {site.services.map((service, index) => (
            <li key={service.id} className={styles.card}>
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
              <h3 className={`display ${styles.cardTitle}`}>{service.title}</h3>
              <p>{service.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
