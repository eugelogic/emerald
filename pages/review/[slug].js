import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'
import Layout from '../../components/Layout'
import styles from '../../styles/Review.module.scss'

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
                <div className={styles.metadata}>
                    <p>
                        Published on <time>{date}</time>
                    </p>
                    <p className={styles.industry}>#{industry}</p>
                    <p className={styles.link}>
                        <a href={`https://www.${link}`} target="_blank" rel="noreferrer noopener">
                            {link} &#10138;
                        </a>
                    </p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
        </Layout>
    )
}

export default ReviewPage
