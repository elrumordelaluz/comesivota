import { Button } from '@aurora-kit/react'
import styles from '../styles/modals.module.css'

function Alert({
  closeModal,
  title = 'Alert',
  text = '',
  subtitle = 'Something went wrong',
  style = {},
}) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {title}
          <small className={styles.subtitle}>{subtitle}</small>
        </h1>

        <Button type="button" onClick={closeModal} inverted>
          Close
        </Button>
      </header>

      <div>
        <p style={style}>{text}</p>
        <footer className={styles.footer}>
          <Button className={styles.submitButton} onClick={closeModal}>
            Close
          </Button>
        </footer>
      </div>
    </>
  )
}

export default Alert
