import Layout from '../components/Layout'
import PlayEntry from '../components/PlayEntry'
import styles from '../styles/Playground.module.css'

const Playground = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Playground</h1>
                <p>
                    Web design and development often make me feel like a kid in a candy shop, there is so much going on.
                    Publishing something on the web is also fairly easy compared to the printed press for instance.
                </p>
                <p>
                    Designing websites can be restrictive though hence this playground where I like to let myself loose
                    and take licences. I like to challenge myself with extravagant ideas that came to life with the aid
                    of techniques like{' '}
                    <a href="https://en.wikipedia.org/wiki/SCAMPER" target="_blank" rel="noopener noreferrer">
                        SCAMPER
                    </a>
                    .
                </p>
                <p>I get inspired by magazines, architecture, music, fashion, art and industrial design.</p>
                <ul className={styles.playgroundList}>
                    <PlayEntry
                        slug="whats-your-type"
                        imageSrc="/whats-your-type.jpg"
                        imageAlt="whats-your-type"
                        imageWidth="600"
                        imageHeight="450"
                        title="What's Your Type"
                    >
                        <div>
                            <span>#DESIGN #CODE</span>
                        </div>
                        <p>
                            This is one of my favourites. I thought it would be easier to put together 15 different font
                            families; far from it. I got the idea from the{' '}
                            <a
                                href="https://profilebooks.com/work/just-my-type/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                “Just My Type” book
                            </a>
                            . If you curious, click each letter to learn what font I used.
                        </p>
                    </PlayEntry>
                    <PlayEntry
                        slug="whats-your-type"
                        imageSrc="/whats-your-type.jpg"
                        imageAlt="whats-your-type"
                        imageWidth="600"
                        imageHeight="450"
                        title="What's Your Type"
                    >
                        <div>
                            <span>#DESIGN #CODE</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </PlayEntry>
                </ul>
            </div>
        </Layout>
    )
}

export default Playground
