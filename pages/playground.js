import Layout from '../components/Layout'
import IndexItemSplit from '../components/IndexItemSplit'
import styles from '../styles/Index.module.scss'

const Playground = () => {
    return (
        <Layout title="Playground">
            <div className="container">
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
                <div className={styles.noticeBox}>
                    <p>All the playground pages are menuless.</p>
                    <p>
                        Use the cross (X) at the top right to navigate back to this page
                        <br />
                        or the &quot;back button&quot; of your browser.
                    </p>
                </div>
                <ul className={styles.indexList}>
                    <IndexItemSplit
                        slug="playground/whats-your-type"
                        imageSrc="/whats-your-type.jpg"
                        imageAlt="whats-your-type"
                        imageWidth="600"
                        imageHeight="450"
                        categories="#DESIGN #CODE"
                        title="What's Your Type"
                    >
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
                    </IndexItemSplit>
                    <IndexItemSplit
                        slug="playground/eugenes-elements"
                        imageSrc="/eugenes-elements.jpg"
                        imageAlt="eugenes-elements"
                        imageWidth="1080"
                        imageHeight="593"
                        categories="#DESIGN #CODE"
                        title="Eugene's Elements"
                    >
                        <p>
                            I always liked the way the period table looks, it&apos;s so well organised. One day I
                            wondered if I could make up my name with some of the elements. The number at the top of each
                            card is the atomic number, whereas the one at the bottom is the atomic weight. Click on each
                            card to learn more.
                        </p>
                        <p>
                            I used flexbox to arrange the cards and the elements within. To make it mobile friendly I
                            just had to edit the direction of flex. I often like to use css named colours since they are
                            easier to remember. This page features darkgreen, darkblue and darkmagenta. The font is{' '}
                            <a
                                href="https://fonts.google.com/specimen/Raleway"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Raleway
                            </a>
                            .
                        </p>
                    </IndexItemSplit>
                </ul>
            </div>
        </Layout>
    )
}

export default Playground
