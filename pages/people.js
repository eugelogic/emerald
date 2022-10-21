import PeopleData from '../public/people-data.json'
import Layout from '../components/Layout'
import PeopleItem from '../components/PeopleItem'
import styles from '../styles/People.module.scss'

const People = () => {
    return (
        <Layout title="People">
            <div className="container">
                <h1>People</h1>
                <p>
                    I always wanted to make a repository of people who inspired me by sharing awesome content on the web
                    or by helping me directly.
                </p>
                <p>
                    When I bumped into{' '}
                    <a href="https://esbueno.noahstokes.com/everyone" target="_blank" rel="noopener noreferrer">
                        Noah Stokes&apos; website
                    </a>{' '}
                    I realised I wasn&apos;t alone so here&apos;s my selection with which I want to say{' '}
                    <span className="textHighlight">&quot;Thank You Awesome People&quot;</span>.
                </p>
            </div>
            <div className="container--large">
                <ul className={styles.peopleList}>
                    {PeopleData?.length > 0 &&
                        PeopleData.map((people) => <PeopleItem key={people.id} people={people} />)}
                </ul>
            </div>
        </Layout>
    )
}

export default People
