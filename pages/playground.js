import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PlayItem from '../components/PlayItem'
import Layout from '../components/Layout'
import { sortByDate } from '../utils'

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('plays'))

    const plays = files.map((filename) => {
        const slug = filename.replace('.md', '')
        const markdownWithMeta = fs.readFileSync(path.join('plays', filename), 'utf8')
        const { data: frontmatter, content } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
            content,
        }
    })

    return {
        props: {
            plays: plays.sort(sortByDate),
        },
    }
}

const Playground = ({ plays }) => {
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
                <div className="noticeBox">
                    <p>All the playground pages are menuless.</p>
                    <p>
                        Use the cross (X) at the top right to navigate back to this page
                        <br />
                        or the back button of your browser.
                    </p>
                </div>
                <ul className="indexList">
                    {plays?.length > 0 &&
                        plays.map((play, index) =>
                            play.frontmatter.draft === false ? <PlayItem key={index} play={play} /> : ''
                        )}
                </ul>
            </div>
        </Layout>
    )
}

export default Playground
