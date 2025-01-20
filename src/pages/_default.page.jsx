import React, { lazy, Suspense } from 'react'
    import { Helmet } from 'react-helmet-async'
    import { Outlet } from 'react-router-dom'
    import Header from '../components/Header'
    import Footer from '../components/Footer'

    const LazyFooter = lazy(() => import('../components/Footer'))

    export default function Layout() {
      return (
        <>
          <Helmet>
            <html lang="en" amp />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
            <link rel="preconnect" href="https://images.unsplash.com" />
            <link rel="dns-prefetch" href="https://images.unsplash.com" />
          </Helmet>
          
          <Header />
          <main>
            <Outlet />
          </main>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyFooter />
          </Suspense>
        </>
      )
    }
