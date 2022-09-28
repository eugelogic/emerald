import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'
import Layout from '../../components/Layout'

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('reviews'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('reviews', slug + '.md'), 'utf8')
    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            content,
        },
    }
}

const ReviewPage = ({ frontmatter: { title, link, date, industry }, content }) => {
    return (
        <Layout title={title}>
            <div className="container">
                <h1>{title}</h1>
                <div>
                    Published on <time>{date}</time>
                </div>
                <div>#{industry}</div>
                <div>
                    <a href={link} target="_blank" rel="noreferrer noopener">
                        {link} &#10138;
                    </a>
                </div>
                <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
        </Layout>
    )
}

export default ReviewPage
