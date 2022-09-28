import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PostItem from '../components/PostItem'
import Layout from '../components/Layout'
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
        <Layout title="Blog">
            <div className="container">
                <h1>Blog</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ul>{posts?.length > 0 && posts.map((post, index) => <PostItem key={index} post={post} />)}</ul>
            </div>
        </Layout>
    )
}

export default Blog
