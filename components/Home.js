import CountdownComponent from './Countdown'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <CountdownComponent />
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Dove si vota?</h2>
        <p className={styles.text}>
          Ogni cittadino vota <strong>nel proprio Comune di residenza</strong>.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Chi può votare?</h2>
        <p className={styles.text}>
          Tutti i cittadini italiani che abbiano{' '}
          <strong>compiuto i 18 anni al 25 settembre</strong> e che godano dei
          diritti civili e politici.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Che documenti servono per votare?</h2>
        <p className={styles.text}>
          La <strong>tessera elettorale</strong> e un{' '}
          <strong>documento di identità</strong>.
        </p>
        <p className={styles.text}>
          <small>
            Il documento è valido anche se scaduto. La tessera elettorale deve
            avere almeno uno spazio disponibile per apporre il timbro del voto.
          </small>
        </p>
      </div>
    </div>
  )
}
