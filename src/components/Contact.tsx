import { site } from '../content/site.ts'
import styles from './Contact.module.css'

const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Hello from the nuvō site')}`

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <p className="eyebrow">Contact</p>
        <h2 className={`display ${styles.title}`}>{site.contact.title}</h2>
        <p className={styles.body}>{site.contact.body}</p>
        <a className={`btn btnPrimary ${styles.cta}`} href={mailto}>
          {site.contact.cta}
        </a>
      </div>
    </section>
  )
}
