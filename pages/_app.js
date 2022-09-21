import { useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ModalProvider } from 'modaaals'
import NProgress from 'nprogress'
import SvgSymbol from '../components/SvgSymbol'
import { modals, globalStyles } from '../modals'
import { website } from '../config/index'
import * as gtag from '../gtag/index'
import '../styles/globals.css'

NProgress.configure({
  easing: 'ease',
  speed: 500,
})
let timeOut

function App({ Component, pageProps }) {
  const router = useRouter()

  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
        gtag.pageview(url)
      }
    }
    router.events.on('routeChangeStart', (url) => {
      clearTimeout(timeOut)
      timeOut = setTimeout(function () {
        window.location.href = url
      }, 3000)
      NProgress.start()
    })
    router.events.on('routeChangeComplete', (url) => {
      NProgress.done()
      clearTimeout(timeOut)
      handleRouteChange(url)
    })
    router.events.on('routeChangeError', () => {
      NProgress.done()
      clearTimeout(timeOut)
    })
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      ) : null}

      <ModalProvider
        modals={modals}
        styles={globalStyles}
        drag={false}
        skipMotion={false}
        portalStyle={{ position: 'relative', zIndex: 10000 }}
        onCloseModal={(modal) => {
          const type = typeof modal === 'string' ? modal : modal.type
          if (type === 'resetPassword' || type === 'alert') {
            router.replace(router.asPath.split('?')[0])
          }
        }}
        defaultModal={
          router.query.resetpassword
            ? {
                type: 'resetPassword',
              }
            : null
        }
      >
        <Head>
          <title>{website.title}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>

        <SvgSymbol />

        {getLayout(<Component {...pageProps} />)}
      </ModalProvider>
    </>
  )
}

export default App
