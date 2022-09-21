import Countdown from 'react-countdown'
import { isToday, isAfter, isBefore } from 'date-fns'
import styles from '../styles/home.module.css'

export default function CountdownComponent() {
  return (
    <>
      <h2 className={styles.title}>Elezioni politiche 2022</h2>
      <p className={styles.text}>mancano</p>
      <Countdown date={destDate} renderer={renderer} />
    </>
  )
}

const renderer = ({ hours, minutes, seconds, days, completed }) => {
  if (completed) {
    const siStaVotando =
      isAfter(new Date(), destDate) && isBefore(new Date(), endDate)
    // Render a completed state
    return siStaVotando ? (
      <p className={styles.text}>
        Si sta votando in questo momento <strong>fino alle ore 23</strong>.
      </p>
    ) : (
      <p className={styles.text}>
        <strong>Votazioni concluse</strong> il giorno 25 settembre 2022 alle ore
        23.
      </p>
    )
  } else {
    // Render a countdown
    return (
      <>
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
        <p className={styles.text}>
          Si vota domenica 25 settembre 2022, <br />
          <strong>dalle ore 7 alle ore 23</strong>
        </p>
      </>
    )
  }
}

const destDate = new Date('September 25, 2022 07:00:00')
const endDate = new Date('September 25, 2022 23:00:00')
