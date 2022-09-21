import React from 'react'
import Link from 'next/link'
import { SvgUseLogo } from '../components/SvgSymbol'
import styles from '../styles/404.module.css'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <Link href="/">
              <a>
                <SvgUseLogo />
              </a>
            </Link>
          </div>
          <h2 className={styles.text}>Something went wrong.</h2>
        </div>
      )
    }
    return this.props.children
  }
}
