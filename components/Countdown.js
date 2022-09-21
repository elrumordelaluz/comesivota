import Countdown from 'react-countdown'
import styles from '../styles/home.module.css'

export default function CountdownComponent() {
  return (
    <>
      <h2 className={styles.title}>Elezioni politiche 2022</h2>
      <p className={styles.text}>mancano</p>
      <Countdown date={detDate} renderer={renderer} />
      <p className={styles.text}>
        Si vota domenica 25 settembre 2022, <br />
        <strong>dalle ore 7 alle ore 23</strong>
      </p>
    </>
  )
}

const renderer = ({ hours, minutes, seconds, days, completed }) => {
  if (completed) {
    // Render a completed state
    return 'complete'
  } else {
    // Render a countdown
    return (
      <div className={styles.countdown}>
        <div className={styles.digitWrapper}>
          <span className={styles.digit}>{days}</span>
          giorni
        </div>
        <div className={styles.digitWrapper}>
          <span className={styles.digit}>{hours}</span>
          ore
        </div>
        <div className={styles.digitWrapper}>
          <span className={styles.digit}>{minutes}</span>
          minuti
        </div>
        <div className={styles.digitWrapper}>
          <span className={styles.digit}>{seconds}</span>
          secondi
        </div>
      </div>
    )
  }
}

const detDate = new Date('September 25, 2022 07:00:00')
