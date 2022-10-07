/* eslint-disable */
import LayoutPlayItem from '../../../components/LayoutPlayItem'
import Head from 'next/head'
import styles from './eugenes-elements.module.scss'

const EugenesElements = () => {
    return (
        <LayoutPlayItem title="Eugene's Elements">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <div className={styles.container}>
                <a
                    href="https://www.rsc.org/periodic-table/element/63/europium"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={`${styles.card} ${styles.cardEu}`}>
                        <span className={styles.atomicNumber}>63</span>
                        <span className={styles.symbol}>Eu</span>
                        <h1>Europium</h1>
                        <span className={styles.atomicWeight}>151.964</span>
                    </div>
                </a>
                <a
                    href="https://www.rsc.org/periodic-table/element/32/germanium"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={`${styles.card} ${styles.cardGe}`}>
                        <span className={styles.atomicNumber}>32</span>
                        <span className={styles.symbol}>Ge</span>
                        <h1>Germanium</h1>
                        <span className={styles.atomicWeight}>72.630</span>
                    </div>
                </a>
                <a href="https://www.rsc.org/periodic-table/element/10/neon" target="_blank" rel="noopener noreferrer">
                    <div className={`${styles.card} ${styles.cardNe}`}>
                        <span className={styles.atomicNumber}>10</span>
                        <span className={styles.symbol}>Ne</span>
                        <h1>Neon</h1>
                        <span className={styles.atomicWeight}>20.180</span>
                    </div>
                </a>
            </div>
        </LayoutPlayItem>
    )
}

export default EugenesElements
