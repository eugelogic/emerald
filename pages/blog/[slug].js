import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'
import styles from './post-page-style.module.css'
import Layout from '../../components/Layout'

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

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
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf8')
    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            content,
        },
    }
}

const PostPage = ({ frontmatter: { title, date, category }, content }) => {
    return (
        <Layout title={title}>
            <div className={styles.container}>
                <h1>{title}</h1>
                <div>
                    Published on<time>{date}</time>
                </div>
                <div>#{category}</div>
                <div className={styles.postBody} dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
        </Layout>
    )
}

export default PostPage
