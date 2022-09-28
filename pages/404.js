import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/404.module.css'

const PageNotFound = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Page Not Found</h1>
                <p>Sorry we can&apos;t seem to find the content you are looking for.</p>
                <p>
                    <Link href="/">
                        <a>Go back to the homepage &rarr;</a>
                    </Link>
                </p>
            </div>
        </Layout>
    )
}

export default PageNotFound
