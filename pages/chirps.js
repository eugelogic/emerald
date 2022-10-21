import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ChirpItem from '../components/ChirpItem'
import Layout from '../components/Layout'
import { sortByDate } from '../utils'

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('chirps'))

    const chirps = files.map((filename) => {
        const slug = filename.replace('.md', '')
        const markdownWithMeta = fs.readFileSync(path.join('chirps', filename), 'utf8')
        const { data: frontmatter, content } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
            content,
        }
    })

    return {
        props: {
            chirps: chirps.sort(sortByDate),
        },
    }
}

const Chirps = ({ chirps, content }) => {
    return (
        <Layout title="Chirps">
            <div className="container">
                <h1>Chirps</h1>
                <p>I&apos;ve never been particularly good at writing blog posts, I&apos;m working on that.</p>
                <p>
                    In the meanwhile, since I do have opinions about things, I&apos;ll use my very own version of
                    Twitter called Chirps, where I share small thoughts with myself mainly for the sake of the record.
                </p>
                <p>Think of chirps as talking to yourself, we all do it right !?</p>
                <ul className="indexList">
                    {chirps?.length > 0 &&
                        chirps.map((chirp, index) => <ChirpItem key={index} chirp={chirp} content={content} />)}
                </ul>
            </div>
        </Layout>
    )
}

export default Chirps
