import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PostItem from '../components/PostItem'

export const getStaticProps = async () => {

  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {

    const slug = filename.replace('.md','')
    const markdownWithMeta = fs.readFileSync(path.join('posts',filename), 'utf8')
    const { data:frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts
    }
  }
}

const Home = ({ posts }) => {

  return (
    <div>
        <h1>Eugene Molari Dev</h1>
        <ul>
        {posts?.length > 0 && posts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
        </ul>
    </div>
  )
}

export default Home