import Link from 'next/link'
import Layout from '../components/Layout'

const PageNotFound = () => {
    return (
        <Layout title="Page Not Found">
            <div className="container">
                <h1>Page Not Found</h1>
                <p>Sorry I can&apos;t seem to find the content you are looking for.</p>
                <p>One of the following must have happened:</p>
                <ul>
                    <li>the link of the page has been altered</li>
                    <li>I removed the page</li>
                    <li>you have been tinckering with the slug</li>
                    <li>the page never existed</li>
                    <li>I made the content of the page private</li>
                    <li>someone has hacked my website 😱</li>
                </ul>
                <p>
                    Regardless, you might consider{' '}
                    <Link href="/">
                        <a>going back to the homepage &rarr;</a>
                    </Link>
                </p>
            </div>
        </Layout>
    )
}

export default PageNotFound
