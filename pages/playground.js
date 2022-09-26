import Layout from '../components/Layout'
import Link from 'next/link'
import styles from '../styles/Playground.module.css'

const Playground = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Playground</h1>
                <p>
                    Web design and development often make me feel like a kid in a candy store, there is so much going
                    on. Publishing something on the web is also fairly easy compared to the printed press for instance.
                </p>
                <p>
                    Designing websites can be restrictive though hence this playground where I like to let myself loose
                    and take licences. I like to challenge myself with extravagant ideas that came to life with the aid
                    of techniques like SCAMPER.
                </p>
                <p>I get inspired by magazines, architecture, music, fashion, art and industrial design.</p>
                <Link href="/playground/whats-your-type">
                    <a>What&apos;s Your Type</a>
                </Link>
            </div>
        </Layout>
    )
}

export default Playground
