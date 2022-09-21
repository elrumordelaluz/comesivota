import Link from 'next/link'
import { SvgUseLogo } from '../components/SvgSymbol'
import styles from '../styles/404.module.css'

export default function Custom404() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <a style={{ color: 'var(--c-green)' }}>
            <SvgUseLogo />
          </a>
        </Link>
      </div>
      <h2 className={styles.text}>This page could not be found.</h2>
    </div>
  )
}
