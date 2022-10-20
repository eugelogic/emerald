import ResourcesData from '../public/resources-data.json'
import Layout from '../components/Layout'
import ResourceItem from '../components/ResourceItem'
import styles from '../styles/Resources.module.scss'

const Resources = () => {
    return (
        <Layout title="Resources">
            <div className="container">
                <h1>Resources</h1>
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
            </div>
            <div className="container--large">
                <div className={styles.resourcesRow}>
                    <div className={styles.resourcesWidget}>
                        <h2>Agencies</h2>
                        <ul className={styles.resourcesList}>
                            {ResourcesData?.length > 0 &&
                                ResourcesData.map((resource) =>
                                    resource.draft === false && resource.category === 'Agency' ? (
                                        <ResourceItem resource={resource} />
                                    ) : (
                                        ''
                                    )
                                )}
                        </ul>
                    </div>
                    <div className={styles.resourcesWidget}>
                        <h2>Inspirational</h2>
                        <ul className={styles.resourcesList}>
                            {ResourcesData?.length > 0 &&
                                ResourcesData.map((resource) =>
                                    resource.draft === true && resource.category === 'Agency' ? (
                                        <ResourceItem resource={resource} />
                                    ) : (
                                        ''
                                    )
                                )}
                        </ul>
                    </div>
                </div>
                <div className={styles.resourcesRow}>
                    <div className={styles.resourcesWidget}>
                        <h2>Design</h2>
                        <ul className={styles.resourcesList}>
                            {ResourcesData?.length > 0 &&
                                ResourcesData.map((resource) =>
                                    resource.draft === false && resource.category === 'Design' ? (
                                        <ResourceItem resource={resource} />
                                    ) : (
                                        ''
                                    )
                                )}
                        </ul>
                    </div>
                    <div className={styles.resourcesWidget}>
                        <h2>Creative</h2>
                        <ul className={styles.resourcesList}>
                            {ResourcesData?.length > 0 &&
                                ResourcesData.map((resource) =>
                                    resource.draft === false && resource.category === 'Creative' ? (
                                        <ResourceItem resource={resource} />
                                    ) : (
                                        ''
                                    )
                                )}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Resources
