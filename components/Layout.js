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
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
