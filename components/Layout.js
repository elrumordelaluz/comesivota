import Link from 'next/link'
import { SvgUseLogo } from './SvgSymbol'
import styles from '../styles/layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/">
            <a className={styles.logo}>
              <SvgUseLogo />
            </a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Link href="/">
            <a className={styles.logo}>
              <SvgUseLogo />
            </a>
          </Link>
        </div>
        <a
          className={styles.smallLink}
          href="https://www.insideframe.it/"
          target="_blank"
          rel="noopener noreferrer"
        >
          insideframe.it
        </a>
      </footer>
    </div>
  )
}
