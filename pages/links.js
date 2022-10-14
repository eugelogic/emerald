import Layout from '../components/Layout'
import ExternalItem from '../components/ExternalItem'
import styles from '../styles/Links.module.scss'

const Links = () => {
    return (
        <Layout title="Links">
            <div className="container">
                <h1>Links</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
                <div className={styles.linksRow}>
                    <div className={styles.linksWidget}>
                        <h2>Inspirational</h2>
                        <ul className={styles.linksList}>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                        </ul>
                    </div>
                    <div className={styles.linksWidget}>
                        <h2>Inspirational</h2>
                        <ul className={styles.linksList}>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                        </ul>
                    </div>
                </div>
                <div className={styles.linksRow}>
                    <div className={styles.linksWidget}>
                        <h2>Inspirational</h2>
                        <ul className={styles.linksList}>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                        </ul>
                    </div>
                    <div className={styles.linksWidget}>
                        <h2>Inspirational</h2>
                        <ul className={styles.linksList}>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                            <ExternalItem src="/icon-behance.png" link="https://www.behance.net/" name="Behance">
                                Behance
                            </ExternalItem>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Links
