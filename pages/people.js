import Layout from '../components/Layout'
import PeopleItem from '../components/PeopleItem'
import styles from '../styles/People.module.scss'

const People = () => {
    return (
        <Layout title="People">
            <div className="container">
                <h1>People</h1>
                <p>
                    I always wanted to have a repository of people who inspired me by sharing awesome content on the web
                    or by helping me directly and when I bumped into{' '}
                    <a href="https://esbueno.noahstokes.com/" target="_blank" rel="noopener noreferrer">
                        Noah Stokes&apos; website
                    </a>{' '}
                    I realised I wasn&apos;t alone so here&apos;s my selection, divided by categories, with which I want
                    to say <span className={styles.textHighlight}>&quot;Thank You Awesome People&quot;</span>.
                </p>
                <div className={styles.linksRow}>
                    <div className={styles.linksWidget}>
                        <h2>Javascript</h2>
                        <ul className={styles.linksList}>
                            <PeopleItem name="Wes Bos" link="https://wesbos.com/" src="/wes-bos.jpg" />
                            <PeopleItem name="Wes Bos" link="https://wesbos.com/" src="/wes-bos.jpg" />
                            <PeopleItem name="Wes Bos" link="https://wesbos.com/" src="/wes-bos.jpg" />
                            <PeopleItem name="Wes Bos" link="https://wesbos.com/" src="/wes-bos.jpg" />
                            <PeopleItem name="Wes Bos" link="https://wesbos.com/" src="/wes-bos.jpg" />
                        </ul>
                    </div>
                    <div className={styles.linksWidget}>
                        <h2>Design</h2>
                        <ul className={styles.linksList}>
                            <PeopleItem
                                name="Pablo Stanley"
                                link="https://www.instagram.com/pablostanley/"
                                src="/pablo-stanley.jpg"
                            />
                            <PeopleItem
                                name="Pablo Stanley"
                                link="https://www.instagram.com/pablostanley/"
                                src="/pablo-stanley.jpg"
                            />
                            <PeopleItem
                                name="Pablo Stanley"
                                link="https://www.instagram.com/pablostanley/"
                                src="/pablo-stanley.jpg"
                            />
                            <PeopleItem
                                name="Pablo Stanley"
                                link="https://www.instagram.com/pablostanley/"
                                src="/pablo-stanley.jpg"
                            />
                            <PeopleItem
                                name="Pablo Stanley"
                                link="https://www.instagram.com/pablostanley/"
                                src="/pablo-stanley.jpg"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default People
