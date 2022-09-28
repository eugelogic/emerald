import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ title, children }) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <link rel="icon" href="./favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>{router.pathname === '/' ? 'Eugene Molari Digital' : `${title} | Eugene Molari Digital`}</title>
                <meta name="description" content="Product Designer" />
            </Head>
            <div>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}

export default Layout
