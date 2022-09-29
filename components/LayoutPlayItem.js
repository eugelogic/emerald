import Head from 'next/head'

const LayoutPlayItem = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{`${title} | Eugene Molari Digital`}</title>
                <meta name="description" content="Product Designer" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <main>{children}</main>
        </>
    )
}

export default LayoutPlayItem
