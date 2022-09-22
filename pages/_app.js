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
  const title = `${website.title} | ${website.shortDesc}`
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
          <title>{title}</title>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />

          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff"></meta>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content={website.description} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={website.title} />
          <meta name="twitter:description" content={website.description} />
          <meta name="twitter:image" content={website.image} />
          <meta property="og:title" content={website.title} />
          <meta property="og:url" content={website.url} />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={website.description}
            key="og-desc"
          />
          <meta property="og:image" content={website.image} key="og-image" />
          <meta property="og:type" content="website" />
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
