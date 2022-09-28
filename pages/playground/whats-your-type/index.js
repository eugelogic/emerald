/* eslint-disable */
import LayoutPlayEntry from '../../../components/LayoutPlayEntry'
import Head from 'next/head'
import styles from './whats-your-type.module.css'

const WhatsYourType = () => {
    return (
        <LayoutPlayEntry title="What's Your Type">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Tangerine&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Tourney:wght@100&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Rye&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Megrim&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Palette+Mosaic&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Baumans&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Emilys+Candy&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.container}>
                <h1 className={styles.text}>
                    <span className={styles.wUp}>
                        <a
                            className={styles.link}
                            href="https://fonts.google.com/specimen/Abril+Fatface"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            W
                        </a>
                    </span>
                    <span className={styles.h}>
                        <a
                            className={styles.link}
                            href="https://fonts.google.com/specimen/Tangerine"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            h
                        </a>
                    </span>
                    <span className={styles.a}>
                        <a
                            className={styles.link}
                            href="https://fonts.google.com/specimen/Gochi+Hand"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            a
                        </a>
                    </span>
                    <span className={styles.t}>
                        <a
                            className={styles.link}
                            href="https://fonts.google.com/specimen/Tourney"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            t
                        </a>
                    </span>
                    <span className={styles.apo}>
                        <a
                            className={styles.link}
                            href="https://fonts.google.com/specimen/Rye"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            '
                        </a>
                    </span>
                    <span className={styles.s}>
                        <a
                            className={styles.link}
                            href="https://fonts.google.com/specimen/Courier+Prime"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            s
                        </a>
                    </span>
                </h1>
                <h1 className={styles.text}>
                    <span className={styles.yUp}>
                        <a
                            className={styles.link}
                            href="https://fonts.google.com/specimen/Megrim"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Y
                        </a>
                    </span>
                    <span className={styles.o}>
                        <a
                            className={styles.link}
                            href="https://fonts.google.com/specimen/Press+Start+2P"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            o
                        </a>
                    </span>
                    <span className={styles.u}>
                        <a
                            className={styles.link}
                            href="https://fonts.google.com/specimen/Orbitron"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            u
                        </a>
                    </span>
                    <span className={styles.r}>
                        <a
                            className={styles.link}
                            href="https://fonts.google.com/specimen/Palette+Mosaic"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            r
                        </a>
                    </span>
                </h1>
                <h1 className={styles.text}>
                    <span className={styles.tUp}>
                        <a
                            className={styles.link}
                            href="https://fonts.google.com/specimen/Bungee+Shade"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            T
                        </a>
                    </span>
                    <span className={styles.y}>
                        <a
                            className={styles.link}
                            href="https://fonts.google.com/specimen/Indie+Flower"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            y
                        </a>
                    </span>
                    <span className={styles.p}>
                        <a
                            className={styles.link}
                            href="https://fonts.google.com/specimen/Baumans"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            p
                        </a>
                    </span>
                    <span className={styles.e}>
                        <a
                            className={styles.link}
                            href="https://fonts.google.com/specimen/Emilys+Candy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            e
                        </a>
                    </span>
                    <span className={styles.qm}>
                        <a
                            className={styles.link}
                            href="https://fonts.google.com/specimen/Original+Surfer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ?
                        </a>
                    </span>
                </h1>
            </div>
        </LayoutPlayEntry>
    )
}

export default WhatsYourType
