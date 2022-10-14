import Layout from '../components/Layout'
import IndexItemSplit from '../components/IndexItemSplit'
import Link from 'next/link'
import styles from '../styles/Index.module.scss'

const Work = () => {
    return (
        <Layout title="Work">
            <div className="container">
                <h1>Work</h1>
                <p>Here are some of the websites I designed and coded over the years for a wide range of clients.</p>
                <ul className={styles.indexList}>
                    <IndexItemSplit
                        slug="work/hbm"
                        imageSrc="/eumodig-image-placeholder-square-light.jpg"
                        imageAlt="eumodig-image-placeholder-square-light"
                        imageWidth="720"
                        imageHeight="720"
                        categories="#DESIGN #CODE"
                        title="HBM"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </p>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                    </IndexItemSplit>
                    <IndexItemSplit
                        slug="work/delparc"
                        imageSrc="/eumodig-image-placeholder-square-light.jpg"
                        imageAlt="eumodig-image-placeholder-square-light"
                        imageWidth="720"
                        imageHeight="720"
                        categories="#DESIGN #CODE"
                        title="delParc"
                    >
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </p>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </IndexItemSplit>
                </ul>
                <div className={styles.moreContent}>
                    <p>Want to see more of my output ?</p>
                    <span className="buttonLink">
                        <Link href="/playground">
                            <a>View Playground</a>
                        </Link>
                    </span>
                </div>
            </div>
        </Layout>
    )
}

export default Work
