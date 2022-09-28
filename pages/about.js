import Layout from '../components/Layout'
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>About</h1>
                <ul>
                    <li>Short story</li>
                    <li>Long story</li>
                </ul>
                <p>
                    Do you believe in cicles? Well I finally completed mine. I started as a project manager (stressing),
                    went on to do development (confusing) and finally product designing (rewarding).
                </p>
            </div>
        </Layout>
    )
}

export default About
