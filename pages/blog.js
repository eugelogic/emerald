import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PostItem from '../components/PostItem'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { sortByDate } from '../utils'

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map((filename) => {
        const slug = filename.replace('.md', '')
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf8')
        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}

const Blog = ({ posts }) => {
    return (
        <div>
            <Header />
            <h1>Blog</h1>
            <ul>{posts?.length > 0 && posts.map((post, index) => <PostItem key={index} post={post} />)}</ul>
            <Footer />
        </div>
    )
}

export default Blog
