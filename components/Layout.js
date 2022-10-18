/* eslint-disable */
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ title, children }) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{router.pathname === '/' ? 'Eugene Molari Digital' : `${title} | Eugene Molari Digital`}</title>
                <meta name="description" content="Product Designer" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="./favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=McLaren&family=Montserrat:wght@400;600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
