import ChirpItem from '../components/ChirpItem'
import Layout from '../components/Layout'

const Chirps = () => {
    return (
        <Layout title="Chirps">
            <div className="container">
                <h1>Chirps</h1>
                <p>I’ve never been particularly good at writing blog posts, I’ll work on that.</p>
                <p>
                    In the meanwhile, since I do have opinions about things, I’ll use my very own version of Twitter
                    called Chirps, where I share small thoughts with myself mainly for the sake of the record.
                </p>
                <p>Think of chirps as talking to yourself, we all do it right !?</p>
                <ul className="indexList">
                    <ChirpItem
                        date="2022-09-27"
                        tweetted={true}
                        tweetLink="https://twitter.com/EugeneMolari/status/1574864898122711040"
                    >
                        <p>
                            When I take a look at a new website, there is something I always check, it’s the copyright
                            year at the bottom of the page. If it’s not up to date I cry. I wonder how that is possible
                            in this day and age of web frameworks which do everything automagically for you.
                        </p>{' '}
                        <p>
                            I personally use <code>`new Date().getFullYear()`</code> to make sure it&apos;s always up to
                            date.
                        </p>
                    </ChirpItem>
                    <ChirpItem
                        date="2022-09-27"
                        tweetted={true}
                        tweetLink="https://twitter.com/EugeneMolari/status/1574864898122711040"
                    >
                        <p>
                            When I take a look at a new website, there is something I always check, it’s the copyright
                            year at the bottom of the page. If it’s not up to date I cry. I wonder how that is possible
                            in this day and age of web frameworks which do everything automagically for you.
                        </p>{' '}
                        <p>
                            I personally use <code>`new Date().getFullYear()`</code> to make sure it&apos;s always up to
                            date.
                        </p>
                    </ChirpItem>
                    <ChirpItem
                        date="2022-09-27"
                        tweetted={true}
                        tweetLink="https://twitter.com/EugeneMolari/status/1574864898122711040"
                    >
                        <p>
                            When I take a look at a new website, there is something I always check, it’s the copyright
                            year at the bottom of the page. If it’s not up to date I cry. I wonder how that is possible
                            in this day and age of web frameworks which do everything automagically for you.
                        </p>{' '}
                        <p>
                            I personally use <code>`new Date().getFullYear()`</code> to make sure it&apos;s always up to
                            date.
                        </p>
                    </ChirpItem>
                </ul>
            </div>
        </Layout>
    )
}

export default Chirps
